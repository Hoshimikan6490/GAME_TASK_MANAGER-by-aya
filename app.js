// ========================================
// グローバル変数
// ========================================
let currentGame = 'zzz';
let currentModal = null;
let comboCount = 0;
let comboTimer = null;

// Chart.jsインスタンス保存用
let barChart = null;
let pieChart = null;
let lineChart = null;

// 効果音URL（Web Audio API用）
const SOUND_EFFECTS = {
	taskComplete:
		'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW1xdXl9gYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXp7fH1+f4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==',
	comboSound:
		'data:audio/wav;base64,UklGRhQEAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YfADAACAgICAgICAgICAgICAgICBg4WIi46Rkpa',
	fireworkSound:
		'data:audio/wav;base64,UklGRhQFAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YfAEAACAgICAgICAgICAgICBg4WIjJCUmJ2h',
};

// ========================================
// 初期タスクデータ
// ========================================
const INITIAL_TASKS = {
	zzz: {
		'daily-high': [
			{ text: '観測（ディニー育成素材・スキルチップ獲得）', priority: 'high' },
			{
				text: 'スクラッチ/占い（ポリクローム・ディニー獲得）',
				priority: 'high',
			},
			{ text: 'コーヒー（バッテリー80回復）', priority: 'high' },
			{
				text: 'バッテリー消費320（HIAセンター・デッキソート）',
				priority: 'high',
			},
			{ text: 'デイリー任務完了（ポリクローム60個）', priority: 'high' },
			{ text: 'エリーファンド（デイリーミッション）', priority: 'high' },
		],
		'daily-low': [
			{
				text: '適当館運営（自動経営ボタン、Lv35以上で自動化）',
				priority: 'low',
			},
			{ text: 'エージェント誘い（1日3人まで）', priority: 'low' },
		],
		weekly: [
			{ text: 'エリース周期（ビンゴ）でポリクローム60個', priority: 'medium' },
			{ text: 'ウィークリーミッション', priority: 'medium' },
			{ text: '要計回り（週ボス）3回無料', priority: 'medium' },
			{ text: '05フロー（8000ポイント報酬全獲得）', priority: 'medium' },
			{
				text: 'プロキシ依頼代行（週2000貢献ポイント上限）',
				priority: 'medium',
			},
		],
		biweekly: [
			{ text: '防衛線・激変濃度（ポリクローム720個）', priority: 'high' },
			{ text: '式局教習戦（ポリクローム300個）', priority: 'high' },
		],
		monthly: [
			{ text: '残響シグナル交換（月5個）', priority: 'high' },
			{ text: 'ボンブコイン交換', priority: 'medium' },
			{ text: '05スコア交換', priority: 'medium' },
			{ text: '調査スコア交換', priority: 'medium' },
			{ text: '貢献ポイント交換', priority: 'medium' },
		],
		other: [
			{ text: 'HoYoLAB 月20日ログインでポリクローム獲得', priority: 'low' },
		],
	},
	hsr: {
		daily: [
			{ text: 'デイリー訓練（活躍度達成）', priority: 'high' },
			{ text: '開拓力消費（240）', priority: 'high' },
			{ text: '模擬宇宙/差分宇宙（週3回）', priority: 'medium' },
			{ text: '凝結虚影（週3回）', priority: 'medium' },
		],
		weekly: [
			{ text: '歴戦余韻（週ボス討伐）', priority: 'high' },
			{ text: '忘却の庭（深層攻略）', priority: 'high' },
			{ text: '虚構叙事（ポイント獲得）', priority: 'high' },
			{ text: 'ウィークリーミッション完了', priority: 'medium' },
		],
		monthly: [
			{ text: 'ショップ交換（巡鉱・星玉）', priority: 'high' },
			{ text: 'イベント参加', priority: 'medium' },
		],
		other: [{ text: 'HoYoLAB ログイン', priority: 'low' }],
	},
	genshin: {
		'daily-high': [
			{ text: 'デイリー依頼4つ完了', priority: 'high' },
			{ text: '天然樹脂消費（160）', priority: 'high' },
		],
		'daily-medium': [
			{ text: '鍛造鉱石作成', priority: 'medium' },
			{ text: '探索派遣', priority: 'medium' },
		],
		'daily-low': [
			{ text: '塵歌壺コイン回収', priority: 'low' },
			{ text: '参量物質変換器', priority: 'low' },
		],
		weekly: [
			{ text: '週ボス討伐（3体）', priority: 'high' },
			{ text: '週間ボス樹脂割引（30樹脂×3回）', priority: 'high' },
			{ text: '洞天百貨交換', priority: 'medium' },
		],
		monthly: [
			{ text: 'スターライト/スターダスト交換', priority: 'high' },
			{ text: '深境螺旋攻略（1～15日/16～月末）', priority: 'high' },
			{ text: 'イベント参加', priority: 'medium' },
		],
		season: [
			{ text: '紀行ミッション（デイリー/ウィークリー）', priority: 'high' },
		],
	},
};

// ========================================
// ローカルストレージ管理
// ========================================
function saveToLocalStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocalStorage(key, defaultValue = null) {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : defaultValue;
}

// ========================================
// 日付ユーティリティ
// ========================================
function getToday() {
	const now = new Date();
	return now.toISOString().split('T')[0]; // YYYY-MM-DD
}

function getWeekNumber(date) {
	const d = new Date(date);
	d.setHours(0, 0, 0, 0);
	d.setDate(d.getDate() + 4 - (d.getDay() || 7));
	const yearStart = new Date(d.getFullYear(), 0, 1);
	return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
}

function getMonthKey() {
	const now = new Date();
	return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

// ========================================
// 履歴データ管理
// ========================================
function saveTaskHistory(game, date) {
	const history = loadFromLocalStorage(`${game}-history`, {});
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	let totalTasks = 0;
	let completedTasks = 0;

	for (const category in tasks) {
		tasks[category].forEach((task) => {
			totalTasks++;
			if (task.completed) completedTasks++;
		});
	}

	history[date] = {
		total: totalTasks,
		completed: completedTasks,
		rate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
	};

	saveToLocalStorage(`${game}-history`, history);
}

function getWeeklyStats(game) {
	const history = loadFromLocalStorage(`${game}-history`, {});
	const today = new Date();
	const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

	let totalTasks = 0;
	let completedTasks = 0;

	for (const date in history) {
		const d = new Date(date);
		if (d >= weekAgo && d <= today) {
			totalTasks += history[date].total;
			completedTasks += history[date].completed;
		}
	}

	return {
		total: totalTasks,
		completed: completedTasks,
		rate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
	};
}

function getMonthlyStats(game) {
	const history = loadFromLocalStorage(`${game}-history`, {});
	const currentMonth = getMonthKey();

	let totalTasks = 0;
	let completedTasks = 0;

	for (const date in history) {
		if (date.startsWith(currentMonth)) {
			totalTasks += history[date].total;
			completedTasks += history[date].completed;
		}
	}

	return {
		total: totalTasks,
		completed: completedTasks,
		rate: totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0,
	};
}

// ========================================
// 初期化
// ========================================
function init() {
	// 各ゲームのタスクを初期化
	for (const game in INITIAL_TASKS) {
		const savedTasks = loadFromLocalStorage(`${game}-tasks`);
		if (!savedTasks) {
			saveToLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);
		}
	}

	// 今日の履歴を保存（初回のみ）
	const today = getToday();
	for (const game in INITIAL_TASKS) {
		saveTaskHistory(game, today);
	}

	// 初回表示
	loadGameTasks('zzz');
	updateAllCountdowns();
	updateAllProgress();
	renderAllCharts('zzz');

	// カウントダウン更新（1秒ごと）
	setInterval(updateAllCountdowns, 1000);

	// 花火キャンバス初期化
	initFireworksCanvas();

	// ブラウザ通知の許可をリクエスト
	if ('Notification' in window && Notification.permission === 'default') {
		Notification.requestPermission();
	}

	// リセット時刻チェック（1分ごと）
	setInterval(checkResetTime, 60000);

	// Chart.js CDN読み込みチェック
	if (typeof Chart === 'undefined') {
		console.warn(
			'Chart.jsが読み込まれていません。HTMLに以下を追加してください:',
		);
		console.warn(
			'<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>',
		);
	}
}

// ========================================
// タブ切り替え
// ========================================
function switchTab(game) {
	// タブボタンの状態更新
	document.querySelectorAll('.tab-btn').forEach((btn) => {
		btn.classList.remove('active');
	});
	document
		.querySelector(`.tab-btn[data-game="${game}"]`)
		.classList.add('active');

	// コンテンツの表示切り替え
	document.querySelectorAll('.tab-content').forEach((content) => {
		content.classList.remove('active');
	});
	document.getElementById(`${game}-content`).classList.add('active');

	// 現在のゲームを更新
	currentGame = game;

	// タスク読み込み
	loadGameTasks(game);
	updateAllProgress();
	renderAllCharts(game);
}

// ========================================
// タスク読み込み & 表示
// ========================================
function loadGameTasks(game) {
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	for (const category in tasks) {
		const listElement = document.getElementById(`${game}-${category}`);
		if (listElement) {
			listElement.innerHTML = '';
			tasks[category].forEach((task, index) => {
				const li = createTaskElement(game, category, index, task);
				listElement.appendChild(li);
			});
		}
	}
}

// ========================================
// タスク要素作成
// ========================================
function createTaskElement(game, category, index, task) {
	const li = document.createElement('li');
	li.className = `task-item ${task.completed ? 'completed' : ''}`;
	li.dataset.game = game;
	li.dataset.category = category;
	li.dataset.index = index;

	li.innerHTML = `
    <div class="task-checkbox"></div>
    <div class="task-content">
      <span class="task-text">${task.text}</span>
      ${task.priority ? `<span class="task-priority ${task.priority}">${getPriorityText(task.priority)}</span>` : ''}
    </div>
    ${task.custom ? '<button class="task-delete" onclick="deleteTask(event)">×</button>' : ''}
  `;

	li.addEventListener('click', (e) => {
		if (!e.target.classList.contains('task-delete')) {
			toggleTask(game, category, index);
		}
	});

	return li;
}

function getPriorityText(priority) {
	const map = { high: '高', medium: '中', low: '低' };
	return map[priority] || '';
}

// ========================================
// タスク完了トグル（ゲーミングエフェクト付き）
// ========================================
function toggleTask(game, category, index) {
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);
	const task = tasks[category][index];

	// 完了状態を反転
	task.completed = !task.completed;

	// 保存
	saveToLocalStorage(`${game}-tasks`, tasks);

	// 履歴更新
	const today = getToday();
	saveTaskHistory(game, today);

	// UI更新
	const taskElement = document.querySelector(
		`.task-item[data-game="${game}"][data-category="${category}"][data-index="${index}"]`,
	);

	if (task.completed) {
		// 完了時のエフェクト
		taskElement.classList.add('completed', 'just-completed');

		// 効果音再生
		playSound('taskComplete');

		// コンボシステム
		incrementCombo();

		// 1秒後にjust-completedクラスを削除
		setTimeout(() => {
			taskElement.classList.remove('just-completed');
		}, 1000);

		// 100%達成チェック
		checkFullCompletion(game);
	} else {
		// 未完了に戻す
		taskElement.classList.remove('completed');
		resetCombo();
	}

	// 進捗更新
	updateAllProgress();

	// グラフ更新
	renderAllCharts(game);
}

// ========================================
// コンボシステム
// ========================================
function incrementCombo() {
	comboCount++;

	// コンボタイマーリセット
	if (comboTimer) clearTimeout(comboTimer);

	// 3タスク以上連続達成でコンボ表示
	if (comboCount >= 3) {
		showComboDisplay();
		playSound('comboSound');
	}

	// 5秒以内に次のタスクを完了しないとコンボリセット
	comboTimer = setTimeout(() => {
		resetCombo();
	}, 5000);
}

function resetCombo() {
	comboCount = 0;
	if (comboTimer) clearTimeout(comboTimer);
	hideComboDisplay();
}

function showComboDisplay() {
	const comboDisplay = document.getElementById('comboDisplay');
	const comboText = comboDisplay.querySelector('.combo-text');

	comboText.textContent = `${comboCount} COMBO!!`;
	comboDisplay.classList.remove('hidden');
	comboDisplay.classList.add('active');

	// 2秒後に非表示
	setTimeout(() => {
		comboDisplay.classList.remove('active');
		setTimeout(() => {
			comboDisplay.classList.add('hidden');
		}, 500);
	}, 2000);
}

function hideComboDisplay() {
	const comboDisplay = document.getElementById('comboDisplay');
	comboDisplay.classList.remove('active');
	comboDisplay.classList.add('hidden');
}

// ========================================
// 100%達成チェック（花火エフェクト）
// ========================================
function checkFullCompletion(game) {
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	let totalTasks = 0;
	let completedTasks = 0;

	for (const category in tasks) {
		tasks[category].forEach((task) => {
			totalTasks++;
			if (task.completed) completedTasks++;
		});
	}

	if (totalTasks > 0 && completedTasks === totalTasks) {
		// 100%達成！花火エフェクト
		launchFireworks();
		playSound('fireworkSound');
		showNotification('🎉 全タスク完了！おめでとうございます！', 5000);
	}
}

// ========================================
// 効果音再生
// ========================================
function playSound(soundName) {
	const audio = new Audio(SOUND_EFFECTS[soundName]);
	audio.volume = 0.3;
	audio.play().catch((e) => console.log('音声再生エラー:', e));
}

// ========================================
// 花火エフェクト
// ========================================
let fireworksCanvas, fireworksCtx;
let fireworks = [];
let particles = [];

function initFireworksCanvas() {
	fireworksCanvas = document.getElementById('fireworksCanvas');
	fireworksCtx = fireworksCanvas.getContext('2d');

	// キャンバスサイズを画面全体に
	resizeFireworksCanvas();
	window.addEventListener('resize', resizeFireworksCanvas);
}

function resizeFireworksCanvas() {
	fireworksCanvas.width = window.innerWidth;
	fireworksCanvas.height = window.innerHeight;
}

function launchFireworks() {
	fireworksCanvas.style.display = 'block';
	fireworksCanvas.style.pointerEvents = 'none';

	// 5秒間花火を打ち上げ
	const duration = 5000;
	const interval = 300;
	const endTime = Date.now() + duration;

	const launchInterval = setInterval(() => {
		if (Date.now() >= endTime) {
			clearInterval(launchInterval);
			setTimeout(() => {
				fireworksCanvas.style.display = 'none';
				fireworks = [];
				particles = [];
			}, 2000);
			return;
		}

		createFirework();
	}, interval);

	animateFireworks();
}

function createFirework() {
	const x = Math.random() * fireworksCanvas.width;
	const y = Math.random() * (fireworksCanvas.height * 0.5);
	const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

	for (let i = 0; i < 50; i++) {
		const angle = (Math.PI * 2 * i) / 50;
		const velocity = 2 + Math.random() * 3;

		particles.push({
			x: x,
			y: y,
			vx: Math.cos(angle) * velocity,
			vy: Math.sin(angle) * velocity,
			life: 100,
			color: color,
		});
	}
}

function animateFireworks() {
	if (particles.length === 0 && fireworks.length === 0) return;

	fireworksCtx.fillStyle = 'rgba(10, 14, 26, 0.1)';
	fireworksCtx.fillRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

	particles.forEach((p, index) => {
		p.x += p.vx;
		p.y += p.vy;
		p.vy += 0.1; // 重力
		p.life -= 2;

		if (p.life <= 0) {
			particles.splice(index, 1);
			return;
		}

		fireworksCtx.fillStyle = p.color;
		fireworksCtx.globalAlpha = p.life / 100;
		fireworksCtx.fillRect(p.x, p.y, 3, 3);
	});

	fireworksCtx.globalAlpha = 1;
	requestAnimationFrame(animateFireworks);
}

// ========================================
// 進捗更新（正確な累計計算）
// ========================================
function updateAllProgress() {
	['zzz', 'hsr', 'genshin'].forEach((game) => {
		updateProgress(game);
	});
}

function updateProgress(game) {
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	// デイリータスク集計
	let dailyTotal = 0;
	let dailyCompleted = 0;

	// ウィークリータスク集計
	let weeklyTotal = 0;
	let weeklyCompleted = 0;

	for (const category in tasks) {
		tasks[category].forEach((task) => {
			if (category.includes('daily')) {
				dailyTotal++;
				if (task.completed) dailyCompleted++;
			} else if (category.includes('weekly')) {
				weeklyTotal++;
				if (task.completed) weeklyCompleted++;
			}
		});
	}

	// デイリー進捗更新
	const dailyProgress = document.getElementById(`${game}-daily-progress`);
	const dailyBar = document.getElementById(`${game}-daily-bar`);
	if (dailyProgress && dailyBar) {
		dailyProgress.textContent = `${dailyCompleted}/${dailyTotal}`;
		const dailyPercent =
			dailyTotal > 0 ? (dailyCompleted / dailyTotal) * 100 : 0;
		dailyBar.style.width = `${dailyPercent}%`;
	}

	// ウィークリー進捗更新
	const weeklyProgress = document.getElementById(`${game}-weekly-progress`);
	const weeklyBar = document.getElementById(`${game}-weekly-bar`);
	if (weeklyProgress && weeklyBar) {
		weeklyProgress.textContent = `${weeklyCompleted}/${weeklyTotal}`;
		const weeklyPercent =
			weeklyTotal > 0 ? (weeklyCompleted / weeklyTotal) * 100 : 0;
		weeklyBar.style.width = `${weeklyPercent}%`;
	}

	// 統計更新（正確な累計）
	updateStats(game);
}

function updateStats(game) {
	// 週次完了率（過去7日間の累計）
	const weeklyStats = getWeeklyStats(game);
	const weeklyRate = document.getElementById(`${game}-weekly-rate`);
	if (weeklyRate) {
		weeklyRate.textContent = `${weeklyStats.rate}%`;
	}

	// 月次完了率（今月の累計）
	const monthlyStats = getMonthlyStats(game);
	const monthlyRate = document.getElementById(`${game}-monthly-rate`);
	if (monthlyRate) {
		monthlyRate.textContent = `${monthlyStats.rate}%`;
	}

	// 連続達成日数
	const streak = document.getElementById(`${game}-streak`);
	if (streak) {
		const streakCount = loadFromLocalStorage('streak-count', 0);
		streak.textContent = `${streakCount}日`;
	}
}

// ========================================
// 統計グラフ描画
// ========================================
function renderAllCharts(game) {
	if (typeof Chart === 'undefined') {
		console.warn('Chart.jsが読み込まれていません');
		return;
	}

	renderBarChart(game);
	renderPieChart(game);
	renderLineChart(game);
}

// 棒グラフ（過去7日間の完了数）
function renderBarChart(game) {
	const canvas = document.getElementById(`${game}-bar-chart`);
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	const history = loadFromLocalStorage(`${game}-history`, {});

	// 過去7日間のデータ取得
	const labels = [];
	const data = [];
	const today = new Date();

	for (let i = 6; i >= 0; i--) {
		const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
		const dateKey = d.toISOString().split('T')[0];
		const month = d.getMonth() + 1;
		const day = d.getDate();

		labels.push(`${month}/${day}`);
		data.push(history[dateKey] ? history[dateKey].completed : 0);
	}

	// 既存のチャートを破棄
	if (barChart) barChart.destroy();

	barChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [
				{
					label: '完了タスク数',
					data: data,
					backgroundColor: 'rgba(0, 240, 255, 0.6)',
					borderColor: 'rgba(0, 240, 255, 1)',
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: '#e0f0ff',
						font: { family: 'Orbitron', size: 12 },
					},
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					ticks: {
						color: '#a0c0e0',
						font: { family: 'Orbitron' },
					},
					grid: { color: 'rgba(42, 58, 90, 0.3)' },
				},
				x: {
					ticks: {
						color: '#a0c0e0',
						font: { family: 'Orbitron' },
					},
					grid: { color: 'rgba(42, 58, 90, 0.3)' },
				},
			},
		},
	});
}

// 円グラフ（今日の完了率）
function renderPieChart(game) {
	const canvas = document.getElementById(`${game}-pie-chart`);
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	let totalTasks = 0;
	let completedTasks = 0;

	for (const category in tasks) {
		tasks[category].forEach((task) => {
			totalTasks++;
			if (task.completed) completedTasks++;
		});
	}

	const incompleteTasks = totalTasks - completedTasks;

	// 既存のチャートを破棄
	if (pieChart) pieChart.destroy();

	pieChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: ['完了', '未完了'],
			datasets: [
				{
					data: [completedTasks, incompleteTasks],
					backgroundColor: [
						'rgba(0, 240, 255, 0.8)',
						'rgba(96, 112, 128, 0.3)',
					],
					borderColor: ['rgba(0, 240, 255, 1)', 'rgba(96, 112, 128, 0.5)'],
					borderWidth: 2,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: '#e0f0ff',
						font: { family: 'Orbitron', size: 12 },
					},
				},
			},
		},
	});
}

// 折れ線グラフ（過去30日間の完了率推移）
function renderLineChart(game) {
	const canvas = document.getElementById(`${game}-line-chart`);
	if (!canvas) return;

	const ctx = canvas.getContext('2d');
	const history = loadFromLocalStorage(`${game}-history`, {});

	// 過去30日間のデータ取得
	const labels = [];
	const data = [];
	const today = new Date();

	for (let i = 29; i >= 0; i--) {
		const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
		const dateKey = d.toISOString().split('T')[0];
		const month = d.getMonth() + 1;
		const day = d.getDate();

		labels.push(`${month}/${day}`);
		data.push(history[dateKey] ? history[dateKey].rate : 0);
	}

	// 既存のチャートを破棄
	if (lineChart) lineChart.destroy();

	lineChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labels,
			datasets: [
				{
					label: '完了率（%）',
					data: data,
					borderColor: 'rgba(0, 240, 255, 1)',
					backgroundColor: 'rgba(0, 240, 255, 0.1)',
					borderWidth: 3,
					tension: 0.4,
					fill: true,
					pointBackgroundColor: 'rgba(0, 240, 255, 1)',
					pointBorderColor: '#0a0e1a',
					pointBorderWidth: 2,
					pointRadius: 4,
					pointHoverRadius: 6,
				},
			],
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: {
					labels: {
						color: '#e0f0ff',
						font: { family: 'Orbitron', size: 12 },
					},
				},
			},
			scales: {
				y: {
					beginAtZero: true,
					max: 100,
					ticks: {
						color: '#a0c0e0',
						font: { family: 'Orbitron' },
						callback: function (value) {
							return value + '%';
						},
					},
					grid: { color: 'rgba(42, 58, 90, 0.3)' },
				},
				x: {
					ticks: {
						color: '#a0c0e0',
						font: { family: 'Orbitron', size: 9 },
						maxRotation: 45,
						minRotation: 45,
					},
					grid: { color: 'rgba(42, 58, 90, 0.3)' },
				},
			},
		},
	});
}

// ========================================
// カウントダウン更新
// ========================================
function updateAllCountdowns() {
	['zzz', 'hsr', 'genshin'].forEach((game) => {
		updateCountdown(game);
	});
}

function updateCountdown(game) {
	const now = new Date();
	const jstOffset = 9 * 60; // JST = UTC+9
	const jstNow = new Date(now.getTime() + jstOffset * 60 * 1000);

	// デイリーリセット: 日本時間午前5時
	const dailyReset = new Date(jstNow);
	dailyReset.setHours(5, 0, 0, 0);
	if (jstNow >= dailyReset) {
		dailyReset.setDate(dailyReset.getDate() + 1);
	}

	const dailyDiff = dailyReset - jstNow;
	const dailyHours = Math.floor(dailyDiff / (1000 * 60 * 60));
	const dailyMinutes = Math.floor((dailyDiff % (1000 * 60 * 60)) / (1000 * 60));
	const dailySeconds = Math.floor((dailyDiff % (1000 * 60)) / 1000);

	const dailyCountdown = document.getElementById(`${game}-daily-countdown`);
	if (dailyCountdown) {
		dailyCountdown.textContent = `${String(dailyHours).padStart(2, '0')}:${String(dailyMinutes).padStart(2, '0')}:${String(dailySeconds).padStart(2, '0')}`;
	}

	// ウィークリーリセット: 月曜日午前5時
	const weeklyReset = new Date(jstNow);
	const dayOfWeek = weeklyReset.getDay();
	const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
	weeklyReset.setDate(weeklyReset.getDate() + daysUntilMonday);
	weeklyReset.setHours(5, 0, 0, 0);

	if (dayOfWeek === 1 && jstNow.getHours() < 5) {
		// 今日が月曜日で5時前の場合
		weeklyReset.setDate(weeklyReset.getDate() - 7);
	}

	const weeklyDiff = weeklyReset - jstNow;
	const weeklyDays = Math.floor(weeklyDiff / (1000 * 60 * 60 * 24));
	const weeklyHours = Math.floor(
		(weeklyDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
	);

	const weeklyCountdown = document.getElementById(`${game}-weekly-countdown`);
	if (weeklyCountdown) {
		weeklyCountdown.textContent = `${weeklyDays}日${weeklyHours}時間`;
	}
}

// ========================================
// リセット時刻チェック（通知）
// ========================================
function checkResetTime() {
	const now = new Date();
	const jstOffset = 9 * 60;
	const jstNow = new Date(now.getTime() + jstOffset * 60 * 1000);

	const hour = jstNow.getHours();
	const minute = jstNow.getMinutes();
	const dayOfWeek = jstNow.getDay();

	// デイリーリセット1時間前（午前4時）
	if (hour === 4 && minute === 0) {
		sendBrowserNotification(
			'⏰ デイリーリセット1時間前',
			'タスクを忘れずに完了しましょう！',
		);
		showNotification('⏰ デイリーリセット1時間前です', 5000);
	}

	// デイリーリセット時刻（午前5時）
	if (hour === 5 && minute === 0) {
		sendBrowserNotification(
			'🌅 デイリーリセット完了',
			'新しい1日が始まりました！',
		);
		showNotification('🌅 デイリーリセットが完了しました', 5000);
	}

	// ウィークリーリセット1時間前（月曜午前4時）
	if (dayOfWeek === 1 && hour === 4 && minute === 0) {
		sendBrowserNotification(
			'⏰ ウィークリーリセット1時間前',
			'週次タスクを忘れずに！',
		);
		showNotification('⏰ ウィークリーリセット1時間前です', 5000);
	}

	// ウィークリーリセット時刻（月曜午前5時）
	if (dayOfWeek === 1 && hour === 5 && minute === 0) {
		sendBrowserNotification(
			'📅 ウィークリーリセット完了',
			'新しい週が始まりました！',
		);
		showNotification('📅 ウィークリーリセットが完了しました', 5000);
	}
}

function sendBrowserNotification(title, body) {
	if ('Notification' in window && Notification.permission === 'granted') {
		new Notification(title, {
			body: body,
			icon: 'https://via.placeholder.com/128',
			badge: 'https://via.placeholder.com/96',
		});
	}
}

// ========================================
// 通知バナー表示
// ========================================
function showNotification(message, duration = 3000) {
	const banner = document.getElementById('notificationBanner');
	const text = document.getElementById('notificationText');

	text.textContent = message;
	banner.classList.remove('hidden');

	setTimeout(() => {
		banner.classList.add('hidden');
	}, duration);
}

function closeNotification() {
	document.getElementById('notificationBanner').classList.add('hidden');
}

// ========================================
// タスクリセット
// ========================================
function resetTasks(game, type) {
	const confirmMessage =
		type === 'all'
			? '全てのタスクをリセットしますか？'
			: 'デイリータスクをリセットしますか？';

	if (!confirm(confirmMessage)) return;

	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	for (const category in tasks) {
		if (type === 'all' || category.includes('daily')) {
			tasks[category].forEach((task) => {
				task.completed = false;
			});
		}
	}

	saveToLocalStorage(`${game}-tasks`, tasks);

	// 履歴更新
	const today = getToday();
	saveTaskHistory(game, today);

	loadGameTasks(game);
	updateAllProgress();
	renderAllCharts(game);

	showNotification(
		`✅ ${type === 'all' ? '全タスク' : 'デイリータスク'}をリセットしました`,
		3000,
	);
}

// ========================================
// カスタムタスク追加
// ========================================
function openAddTaskModal(game) {
	currentModal = game;
	const modal = document.getElementById('addTaskModal');
	const categorySelect = document.getElementById('taskCategory');

	// カテゴリオプション設定
	categorySelect.innerHTML = '<option value="">選択してください</option>';
	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);

	for (const category in tasks) {
		const option = document.createElement('option');
		option.value = category;
		option.textContent = getCategoryDisplayName(category);
		categorySelect.appendChild(option);
	}

	modal.classList.add('active');
}

function closeAddTaskModal() {
	document.getElementById('addTaskModal').classList.remove('active');
	document.getElementById('addTaskForm').reset();
	currentModal = null;
}

function addCustomTask(event) {
	event.preventDefault();

	const taskName = document.getElementById('taskName').value;
	const category = document.getElementById('taskCategory').value;
	const priority = document.getElementById('taskPriority').value;

	if (!taskName || !category || !currentModal) return;

	const tasks = loadFromLocalStorage(
		`${currentModal}-tasks`,
		INITIAL_TASKS[currentModal],
	);

	tasks[category].push({
		text: taskName,
		priority: priority,
		completed: false,
		custom: true,
	});

	saveToLocalStorage(`${currentModal}-tasks`, tasks);

	// 履歴更新
	const today = getToday();
	saveTaskHistory(currentModal, today);

	loadGameTasks(currentModal);
	updateAllProgress();
	renderAllCharts(currentModal);
	closeAddTaskModal();

	showNotification('✅ カスタムタスクを追加しました', 3000);
}

function getCategoryDisplayName(category) {
	const map = {
		'daily-high': 'デイリー（高優先度）',
		'daily-medium': 'デイリー（中優先度）',
		'daily-low': 'デイリー（低優先度）',
		daily: 'デイリー',
		weekly: 'ウィークリー',
		biweekly: '隔週',
		monthly: '毎月',
		season: '季節イベント',
		other: 'その他',
	};
	return map[category] || category;
}

// ========================================
// タスク削除
// ========================================
function deleteTask(event) {
	event.stopPropagation();

	if (!confirm('このタスクを削除しますか？')) return;

	const taskItem = event.target.closest('.task-item');
	const game = taskItem.dataset.game;
	const category = taskItem.dataset.category;
	const index = parseInt(taskItem.dataset.index);

	const tasks = loadFromLocalStorage(`${game}-tasks`, INITIAL_TASKS[game]);
	tasks[category].splice(index, 1);

	saveToLocalStorage(`${game}-tasks`, tasks);

	// 履歴更新
	const today = getToday();
	saveTaskHistory(game, today);

	loadGameTasks(game);
	updateAllProgress();
	renderAllCharts(game);

	showNotification('✅ タスクを削除しました', 3000);
}

// ========================================
// バトルパス更新
// ========================================
function updateBattlePass(game) {
	const levelInput = document.getElementById(`${game}-bp-level-input`);
	const expInput = document.getElementById(`${game}-bp-exp-input`);

	const level = parseInt(levelInput.value) || 1;
	const exp = parseInt(expInput.value) || 0;

	document.getElementById(`${game}-bp-level`).textContent = level;
	document.getElementById(`${game}-bp-exp`).textContent = `${exp} / 10,000`;

	saveToLocalStorage(`${game}-bp-level`, level);
	saveToLocalStorage(`${game}-bp-exp`, exp);

	showNotification('✅ バトルパス進捗を更新しました', 3000);
}

// ========================================
// ページ読み込み時に初期化
// ========================================
document.addEventListener('DOMContentLoaded', init);
// ========================================
// タブ切り替え
// ========================================
function switchTab(game) {
	console.log('Switching to game:', game); // デバッグ用

	// タブボタンの状態更新
	const tabButtons = document.querySelectorAll('.tab-btn');
	tabButtons.forEach((btn) => {
		btn.classList.remove('active');
	});

	const activeButton = document.querySelector(`.tab-btn[data-game="${game}"]`);
	if (activeButton) {
		activeButton.classList.add('active');
	} else {
		console.error('Tab button not found for game:', game);
	}

	// コンテンツの表示切り替え
	const tabContents = document.querySelectorAll('.tab-content');
	tabContents.forEach((content) => {
		content.classList.remove('active');
	});

	const activeContent = document.getElementById(`${game}-content`);
	if (activeContent) {
		activeContent.classList.add('active');
	} else {
		console.error('Tab content not found for game:', game);
	}

	// 現在のゲームを更新
	currentGame = game;

	// タスク読み込み
	loadGameTasks(game);
	updateAllProgress();

	// グラフ更新（Chart.jsが読み込まれている場合のみ）
	if (typeof Chart !== 'undefined') {
		renderAllCharts(game);
	}
}
