// ===== データ定義 =====
const gameData = {
    genshin: {
        name: '原神',
        icon: '⚔️',
        dailyReset: 4,
        weeklyReset: { day: 1, hour: 4 },
        dailyTasks: [
            { id: 'g_daily_1', label: 'デイリー依頼 4件完了', exp: 200 },
            { id: 'g_daily_2', label: '天然樹脂 160消費', exp: 400 },
            { id: 'g_daily_3', label: '鍛造 武器素材', exp: 0 },
            { id: 'g_daily_4', label: '塵歌壺 洞天宝銭回収', exp: 0 },
            { id: 'g_daily_5', label: '派遣完了・再派遣', exp: 0 }
        ],
        weeklyTasks: [
            { id: 'g_weekly_1', label: '週ボス 3体討伐', exp: 1500 },
            { id: 'g_weekly_2', label: '深境螺旋 挑戦', exp: 500 },
            { id: 'g_weekly_3', label: '樹脂 1200消費', exp: 1200 },
            { id: 'g_weekly_4', label: '精鋭敵 10体討伐', exp: 500 },
            { id: 'g_weekly_5', label: '世界任務 完了', exp: 300 },
            { id: 'g_weekly_6', label: '評判依頼 完了', exp: 300 }
        ],
        commonWishes: [
            'キャラ育成（レベル上げ）',
            '武器レベル上げ',
            '聖遺物厳選',
            '天賦素材集め',
            'ボス素材集め',
            '探索（宝箱・ギミック）',
            '釣り',
            '料理レシピ収集',
            '実績解除'
        ],
        updateChecklist: [
            { id: 'g_update_1', label: '樹脂を使い切る' },
            { id: 'g_update_2', label: '紀行EXPを確認' },
            { id: 'g_update_3', label: '期限切れ素材を確認' },
            { id: 'g_update_4', label: 'イベント報酬を受け取る' },
            { id: 'g_update_5', label: '深境螺旋をクリア' },
            { id: 'g_update_6', label: 'スクリーンショット保存' }
        ]
    },
    zzz: {
        name: 'ゼンレスゾーンゼロ',
        icon: '🔫',
        dailyReset: 5,
        weeklyReset: { day: 1, hour: 5 },
        dailyTasks: [
            { id: 'z_daily_1', label: 'デイリー依頼 完了', exp: 200 },
            { id: 'z_daily_2', label: 'バッテリー 240消費', exp: 400 },
            { id: 'z_daily_3', label: 'スクラッチカード', exp: 0 },
            { id: 'z_daily_4', label: 'ビデオ屋レンタル確認', exp: 0 },
            { id: 'z_daily_5', label: 'コーヒー購入', exp: 0 }
        ],
        weeklyTasks: [
            { id: 'z_weekly_1', label: '週間依頼 完了', exp: 1500 },
            { id: 'z_weekly_2', label: '式輿防衛戦 挑戦', exp: 500 },
            { id: 'z_weekly_3', label: 'バッテリー 1400消費', exp: 1200 },
            { id: 'z_weekly_4', label: 'ゼロ号ホロウ 調査', exp: 500 }
        ],
        commonWishes: [
            'エージェント育成',
            '音動機強化',
            'ドライバディスク厳選',
            'スキル素材集め',
            'ホロウ探索',
            '信頼度上げ',
            'VHSテープ収集'
        ],
        updateChecklist: [
            { id: 'z_update_1', label: 'バッテリーを使い切る' },
            { id: 'z_update_2', label: 'エリーファンドEXPを確認' },
            { id: 'z_update_3', label: 'イベント報酬を受け取る' },
            { id: 'z_update_4', label: '式輿防衛戦をクリア' },
            { id: 'z_update_5', label: 'スクリーンショット保存' }
        ]
    },
    hsr: {
        name: '崩壊スターレイル',
        icon: '🚄',
        dailyReset: 5,
        weeklyReset: { day: 1, hour: 5 },
        dailyTasks: [
            { id: 'h_daily_1', label: 'デイリー訓練 完了', exp: 200 },
            { id: 'h_daily_2', label: '開拓力 240消費', exp: 400 },
            { id: 'h_daily_3', label: 'マイレージ購入', exp: 0 },
            { id: 'h_daily_4', label: '派遣完了・再派遣', exp: 0 },
            { id: 'h_daily_5', label: 'シミュレーション宇宙', exp: 0 }
        ],
        weeklyTasks: [
            { id: 'h_weekly_1', label: '週ボス 討伐', exp: 1500 },
            { id: 'h_weekly_2', label: '混沌の記憶 挑戦', exp: 500 },
            { id: 'h_weekly_3', label: '開拓力 1400消費', exp: 1200 },
            { id: 'h_weekly_4', label: '模擬宇宙 週間報酬', exp: 500 },
            { id: 'h_weekly_5', label: 'エコーオブウォー 報酬', exp: 300 }
        ],
        commonWishes: [
            'キャラ育成（レベル上げ）',
            '光円錐強化',
            '遺物厳選',
            '軌跡素材集め',
            'ボス素材集め',
            '模擬宇宙周回',
            '宝箱・ギミック探索',
            '実績解除'
        ],
        updateChecklist: [
            { id: 'h_update_1', label: '開拓力を使い切る' },
            { id: 'h_update_2', label: 'ナナシの勲功EXPを確認' },
            { id: 'h_update_3', label: 'イベント報酬を受け取る' },
            { id: 'h_update_4', label: '混沌の記憶をクリア' },
            { id: 'h_update_5', label: 'スクリーンショット保存' }
        ]
    }
};

// ===== アプリケーション状態 =====
let appState = {
    currentGame: 'genshin',
    currentContent: 'daily',
    calendarDate: new Date(),
    tasks: {},
    events: {},
    updateChecks: {},
    updateMemos: {},
    inheritedTasks: {},
    bpProgress: {},
    nextUpdateDates: {},
    notifications: {},
    lastReset: {},
    wishlist: [],
    dataCreatedAt: null
};

// ===== 定数 =====
const SIX_WEEKS_MS = 6 * 7 * 24 * 60 * 60 * 1000;

// ===== 初期化 =====
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    checkDataExpiry();
    initTabs();
    initBattlePass();
    initCalendar();
    initEventModal();
    initSeasonModal();
    initWishModal();
    initUpdateChecklist();
    initNotifications();
    startTimers();
    render();
});

// ===== データ保存・読み込み =====
function saveData() {
    const data = {
        tasks: appState.tasks,
        events: appState.events,
        updateChecks: appState.updateChecks,
        updateMemos: appState.updateMemos,
        inheritedTasks: appState.inheritedTasks,
        bpProgress: appState.bpProgress,
        nextUpdateDates: appState.nextUpdateDates,
        notifications: appState.notifications,
        lastReset: appState.lastReset,
        wishlist: appState.wishlist,
        dataCreatedAt: appState.dataCreatedAt
    };
    localStorage.setItem('gameTaskManager', JSON.stringify(data));
}

function loadData() {
    const saved = localStorage.getItem('gameTaskManager');
    if (saved) {
        const data = JSON.parse(saved);
        appState.tasks = data.tasks || {};
        appState.events = data.events || {};
        appState.updateChecks = data.updateChecks || {};
        appState.updateMemos = data.updateMemos || {};
        appState.inheritedTasks = data.inheritedTasks || {};
        appState.bpProgress = data.bpProgress || {};
        appState.nextUpdateDates = data.nextUpdateDates || {};
        appState.notifications = data.notifications || {};
        appState.lastReset = data.lastReset || {};
        appState.wishlist = data.wishlist || [];
        appState.dataCreatedAt = data.dataCreatedAt || Date.now();
    } else {
        appState.dataCreatedAt = Date.now();
    }
    
    ['genshin', 'zzz', 'hsr'].forEach(game => {
        if (!appState.tasks[game]) appState.tasks[game] = { daily: {}, weekly: {} };
        if (!appState.events[game]) appState.events[game] = [];
        if (!appState.updateChecks[game]) appState.updateChecks[game] = {};
        if (!appState.updateMemos[game]) appState.updateMemos[game] = {};
        if (!appState.inheritedTasks[game]) appState.inheritedTasks[game] = [];
        if (!appState.bpProgress[game]) appState.bpProgress[game] = { level: 0, weeklyExp: 0 };
        if (!appState.lastReset[game]) appState.lastReset[game] = { daily: null, weekly: null };
    });
    
    saveData();
}

function checkDataExpiry() {
    const now = Date.now();
    if (appState.dataCreatedAt && (now - appState.dataCreatedAt) > SIX_WEEKS_MS) {
        appState.dataCreatedAt = now;
        saveData();
    }
}

// ===== 自動リセット =====
function checkAutoReset() {
    const now = new Date();
    const todayKey = now.toDateString();
    
    ['genshin', 'zzz', 'hsr'].forEach(game => {
        const resetHour = gameData[game].dailyReset;
        const weeklyReset = gameData[game].weeklyReset;
        
        if (now.getHours() >= resetHour) {
            const lastDaily = appState.lastReset[game].daily;
            if (lastDaily !== todayKey) {
                appState.tasks[game].daily = {};
                appState.lastReset[game].daily = todayKey;
            }
        }
        
        if (now.getDay() === weeklyReset.day && now.getHours() >= weeklyReset.hour) {
            const weekKey = getWeekKey(now);
            const lastWeekly = appState.lastReset[game].weekly;
            if (lastWeekly !== weekKey) {
                appState.tasks[game].weekly = {};
                appState.bpProgress[game].weeklyExp = 0;
                appState.lastReset[game].weekly = weekKey;
            }
        }
    });
    
    saveData();
}

function getWeekKey(date) {
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const days = Math.floor((date - startOfYear) / (24 * 60 * 60 * 1000));
    const week = Math.ceil((days + startOfYear.getDay() + 1) / 7);
    return `${year}-W${week}`;
}

// ===== タブ切り替え =====
function initTabs() {
    document.querySelectorAll('.game-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.currentGame = tab.dataset.game;
            render();
        });
    });
    
    document.querySelectorAll('.content-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.content-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            appState.currentContent = tab.dataset.content;
            
            document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
            document.getElementById(`${tab.dataset.content}-panel`).classList.add('active');
            
            render();
        });
    });
}

// ===== レンダリング =====
function render() {
    renderDailyTasks();
    renderWeeklyTasks();
    renderInheritedTasks();
    renderBattlePass();
    renderWishlist();
    renderEvents();
    renderUpdateChecklist();
    renderCalendar();
    updateProgress();
}

function renderDailyTasks() {
    const game = appState.currentGame;
    const tasks = gameData[game].dailyTasks;
    const container = document.getElementById('dailyTaskList');
    
    container.innerHTML = tasks.map(task => {
        const isCompleted = appState.tasks[game]?.daily?.[task.id] || false;
        return `
            <div class="task-card ${isCompleted ? 'completed' : ''}">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                    onchange="toggleTask('${game}', 'daily', '${task.id}')">
                <div class="task-info">
                    <div class="task-label">${task.label}</div>
                    ${task.exp > 0 ? `<div class="task-exp">+${task.exp} BP EXP</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderWeeklyTasks() {
    const game = appState.currentGame;
    const tasks = gameData[game].weeklyTasks;
    const container = document.getElementById('weeklyTaskList');
    
    container.innerHTML = tasks.map(task => {
        const isCompleted = appState.tasks[game]?.weekly?.[task.id] || false;
        return `
            <div class="task-card ${isCompleted ? 'completed' : ''}">
                <input type="checkbox" ${isCompleted ? 'checked' : ''} 
                    onchange="toggleTask('${game}', 'weekly', '${task.id}')">
                <div class="task-info">
                    <div class="task-label">${task.label}</div>
                    ${task.exp > 0 ? `<div class="task-exp">+${task.exp} BP EXP</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function renderInheritedTasks() {
    const game = appState.currentGame;
    const tasks = appState.inheritedTasks[game] || [];
    const container = document.getElementById('inheritedTaskList');
    const section = document.getElementById('inheritedTasks');
    
    if (tasks.length === 0) {
        section.style.display = 'none';
        return;
    }
    
    section.style.display = 'block';
    container.innerHTML = tasks.map((task, index) => `
        <div class="task-card inherited-task-card ${task.completed ? 'completed' : ''}">
            <input type="checkbox" ${task.completed ? 'checked' : ''} 
                onchange="toggleInheritedTask('${game}', ${index})">
            <div class="task-info">
                <div class="task-label">
                    ${task.label}
                    <span class="bp-badge">BP対象外</span>
                </div>
                ${task.reward ? `<div class="task-exp">報酬: ${task.reward}</div>` : ''}
            </div>
            <button onclick="removeInheritedTask('${game}', ${index})" style="background:none;border:none;color:#ef4444;cursor:pointer;font-size:1.2rem;">×</button>
        </div>
    `).join('');
}

function toggleTask(game, type, taskId) {
    if (!appState.tasks[game]) appState.tasks[game] = { daily: {}, weekly: {} };
    if (!appState.tasks[game][type]) appState.tasks[game][type] = {};
    
    appState.tasks[game][type][taskId] = !appState.tasks[game][type][taskId];
    saveData();
    render();
}

function toggleInheritedTask(game, index) {
    appState.inheritedTasks[game][index].completed = !appState.inheritedTasks[game][index].completed;
    saveData();
    render();
}

function removeInheritedTask(game, index) {
    appState.inheritedTasks[game].splice(index, 1);
    saveData();
    render();
}

function updateProgress() {
    const game = appState.currentGame;
    
    const dailyTasks = gameData[game].dailyTasks;
    const dailyCompleted = dailyTasks.filter(t => appState.tasks[game]?.daily?.[t.id]).length;
    document.getElementById('dailyProgress').textContent = `${dailyCompleted}/${dailyTasks.length}`;
    
    const weeklyTasks = gameData[game].weeklyTasks;
    const weeklyCompleted = weeklyTasks.filter(t => appState.tasks[game]?.weekly?.[t.id]).length;
    document.getElementById('weeklyProgress').textContent = `${weeklyCompleted}/${weeklyTasks.length}`;
}

// ===== バトルパス =====
function initBattlePass() {
    const levelInput = document.getElementById('bpCurrentLevel');
    const expInput = document.getElementById('bpWeeklyExp');
    const slider = document.getElementById('bpSlider');
    
    levelInput.addEventListener('change', () => {
        const game = appState.currentGame;
        appState.bpProgress[game].level = parseInt(levelInput.value) || 0;
        saveData();
        renderBattlePass();
    });
    
    expInput.addEventListener('change', () => {
        const game = appState.currentGame;
        appState.bpProgress[game].weeklyExp = parseInt(expInput.value) || 0;
        slider.value = appState.bpProgress[game].weeklyExp;
        saveData();
        renderBattlePass();
    });
    
    slider.addEventListener('input', () => {
        const game = appState.currentGame;
        appState.bpProgress[game].weeklyExp = parseInt(slider.value) || 0;
        expInput.value = slider.value;
        saveData();
        renderBattlePass();
    });
}

function renderBattlePass() {
    const game = appState.currentGame;
    const progress = appState.bpProgress[game] || { level: 0, weeklyExp: 0 };
    
    document.getElementById('bpCurrentLevel').value = progress.level;
    document.getElementById('bpWeeklyExp').value = progress.weeklyExp;
    document.getElementById('bpSlider').value = progress.weeklyExp;
    
    const percentage = (progress.weeklyExp / 10000) * 100;
    document.getElementById('bpProgressBar').style.width = `${percentage}%`;
    document.getElementById('bpProgressText').textContent = `${progress.weeklyExp.toLocaleString()} / 10,000 EXP`;
}

// ===== 新シーズンモーダル =====
function initSeasonModal() {
    const modal = document.getElementById('seasonModal');
    const openBtn = document.getElementById('newSeasonBtn');
    const cancelBtn = document.getElementById('cancelSeason');
    const confirmBtn = document.getElementById('confirmSeason');
    
    openBtn.addEventListener('click', () => modal.classList.add('active'));
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
    
    confirmBtn.addEventListener('click', () => {
        const game = appState.currentGame;
        appState.bpProgress[game] = { level: 0, weeklyExp: 0 };
        saveData();
        render();
        modal.classList.remove('active');
        alert(`${gameData[game].name}のバトルパス進捗をリセットしました！`);
    });
}

// ===== Wishlist =====
function initWishModal() {
    const modal = document.getElementById('wishModal');
    const openBtn = document.getElementById('addWishBtn');
    const cancelBtn = document.getElementById('cancelWish');
    const saveBtn = document.getElementById('saveWish');
    const hasDeadlineCheckbox = document.getElementById('wishHasDeadline');
    const deadlineInput = document.getElementById('wishDeadline');
    
    // モーダルを開く
    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        updateWishTaskList();
    });
    
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
    
    // タブ切り替え
    document.querySelectorAll('.wish-modal-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.wish-modal-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.wish-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(`wish-${tab.dataset.tab}-tab`).classList.add('active');
        });
    });
    
    // ゲーム・カテゴリ変更時
    document.getElementById('wishGameSelect').addEventListener('change', updateWishTaskList);
    document.getElementById('wishCategorySelect').addEventListener('change', updateWishTaskList);
    
    // 期限チェックボックス
    hasDeadlineCheckbox.addEventListener('change', () => {
        deadlineInput.disabled = !hasDeadlineCheckbox.checked;
    });
    
    // 保存
    saveBtn.addEventListener('click', () => {
        const activeTab = document.querySelector('.wish-modal-tab.active').dataset.tab;
        
        if (activeTab === 'select') {
            // 選択追加
            const selectedTasks = document.querySelectorAll('#wishTaskSelectList input[type="checkbox"]:checked');
            const game = document.getElementById('wishGameSelect').value;
            
            selectedTasks.forEach(checkbox => {
                appState.wishlist.push({
                    id: Date.now() + Math.random(),
                    game: game,
                    title: checkbox.dataset.label,
                    memo: '',
                    deadline: null,
                    completed: false,
                    createdAt: Date.now()
                });
            });
        } else {
            // 手動追加
            const game = document.getElementById('wishGameManual').value;
            const title = document.getElementById('wishManualTitle').value;
            const memo = document.getElementById('wishManualMemo').value;
            const hasDeadline = document.getElementById('wishHasDeadline').checked;
            const deadline = hasDeadline ? document.getElementById('wishDeadline').value : null;
            
            if (!title.trim()) {
                alert('タイトルを入力してください');
                return;
            }
            
            appState.wishlist.push({
                id: Date.now(),
                game: game,
                title: title,
                memo: memo,
                deadline: deadline,
                completed: false,
                createdAt: Date.now()
            });
            
            // フォームリセット
            document.getElementById('wishManualTitle').value = '';
            document.getElementById('wishManualMemo').value = '';
            document.getElementById('wishHasDeadline').checked = false;
            document.getElementById('wishDeadline').value = '';
            document.getElementById('wishDeadline').disabled = true;
        }
        
        saveData();
        render();
        modal.classList.remove('active');
    });
}

function updateWishTaskList() {
    const game = document.getElementById('wishGameSelect').value;
    const category = document.getElementById('wishCategorySelect').value;
    const container = document.getElementById('wishTaskSelectList');
    
    let tasks = [];
    
    if (category === 'daily') {
        tasks = gameData[game].dailyTasks.map(t => t.label);
    } else if (category === 'weekly') {
        tasks = gameData[game].weeklyTasks.map(t => t.label);
    } else if (category === 'common') {
        tasks = gameData[game].commonWishes;
    }
    
    container.innerHTML = tasks.map(task => `
        <div class="wish-task-option">
            <input type="checkbox" data-label="${task}">
            <span>${task}</span>
        </div>
    `).join('');
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    const wishlist = appState.wishlist;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:20px;">まだWishlistがありません</p>';
        return;
    }
    
    // 未完了を上に、完了を下に
    const sorted = [...wishlist].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return b.createdAt - a.createdAt;
    });
    
    container.innerHTML = sorted.map(wish => {
        const gameInfo = gameData[wish.game];
        const now = new Date();
        const isOverdue = wish.deadline && new Date(wish.deadline) < now && !wish.completed;
        
        let deadlineText = '';
        if (wish.deadline) {
            const dl = new Date(wish.deadline);
            const remaining = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
            if (remaining > 0) {
                deadlineText = `期限まで ${remaining} 日`;
            } else if (remaining === 0) {
                deadlineText = '今日が期限！';
            } else {
                deadlineText = `${Math.abs(remaining)} 日超過`;
            }
        }
        
        return `
            <div class="wish-card ${wish.completed ? 'completed' : ''}">
                <div class="wish-card-header">
                    <input type="checkbox" ${wish.completed ? 'checked' : ''} 
                        onchange="toggleWish(${wish.id})">
                    <span class="wish-card-title">${wish.title}</span>
                    <span class="wish-card-game ${wish.game}">${gameInfo.icon} ${gameInfo.name}</span>
                </div>
                ${wish.memo ? `<div class="wish-card-memo">${wish.memo}</div>` : ''}
                ${wish.deadline ? `<div class="wish-card-deadline ${isOverdue ? 'overdue' : ''}">${isOverdue ? '⚠️' : '📅'} ${deadlineText}</div>` : ''}
                <div class="wish-card-actions">
                    <button class="btn-wish-delete" onclick="removeWish(${wish.id})">削除</button>
                </div>
            </div>
        `;
    }).join('');
}

function toggleWish(id) {
    const wish = appState.wishlist.find(w => w.id === id);
    if (wish) {
        wish.completed = !wish.completed;
        saveData();
        render();
    }
}

function removeWish(id) {
    appState.wishlist = appState.wishlist.filter(w => w.id !== id);
    saveData();
    render();
}

// ===== イベント =====
function initEventModal() {
    const modal = document.getElementById('eventModal');
    const addBtn = document.getElementById('addEventBtn');
    const cancelBtn = document.getElementById('cancelEvent');
    const saveBtn = document.getElementById('saveEvent');
    const refreshBtn = document.getElementById('refreshEventsBtn');
    
    addBtn.addEventListener('click', () => modal.classList.add('active'));
    cancelBtn.addEventListener('click', () => modal.classList.remove('active'));
    
    saveBtn.addEventListener('click', () => {
        const game = appState.currentGame;
        const event = {
            id: Date.now(),
            name: document.getElementById('eventName').value,
            start: document.getElementById('eventStart').value,
            end: document.getElementById('eventEnd').value,
            reward: document.getElementById('eventReward').value
        };
        
        if (event.name && event.end) {
            appState.events[game].push(event);
            saveData();
            render();
            modal.classList.remove('active');
            
            document.getElementById('eventName').value = '';
            document.getElementById('eventStart').value = '';
            document.getElementById('eventEnd').value = '';
            document.getElementById('eventReward').value = '';
        }
    });
    
    refreshBtn.addEventListener('click', fetchApiEvents);
}

function renderEvents() {
    const game = appState.currentGame;
    const events = appState.events[game] || [];
    const container = document.getElementById('eventList');
    
    if (events.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary);text-align:center;padding:20px;">イベントがありません</p>';
        return;
    }
    
    container.innerHTML = events.map(event => {
        const endDate = new Date(event.end);
        const now = new Date();
        const remaining = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
        
        return `
            <div class="event-card">
                <div class="event-name">${event.name}</div>
                <div class="event-date">〜 ${formatDate(event.end)}</div>
                ${event.reward ? `<div class="event-reward">報酬: ${event.reward}</div>` : ''}
                <div class="event-remaining">${remaining > 0 ? `残り ${remaining} 日` : '終了'}</div>
                <button onclick="removeEvent('${game}', ${event.id})" style="margin-top:10px;background:var(--danger);color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">削除</button>
            </div>
        `;
    }).join('');
}

function removeEvent(game, eventId) {
    appState.events[game] = appState.events[game].filter(e => e.id !== eventId);
    saveData();
    render();
}

async function fetchApiEvents() {
    const game = appState.currentGame;
    const container = document.getElementById('apiEventList');
    container.innerHTML = '<p style="color:var(--text-secondary);">読み込み中...</p>';
    
    let apiGame = game;
    if (game === 'hsr') apiGame = 'starrail';
    if (game === 'zzz') apiGame = 'zenless';
    
    try {
        if (game === 'genshin' || game === 'hsr') {
            const response = await fetch(`https://api.ennead.cc/mihoyo/${apiGame}/calendar`);
            if (response.ok) {
                const data = await response.json();
                renderApiEvents(data);
                return;
            }
        }
        
        const newsResponse = await fetch(`https://api.ennead.cc/mihoyo/${apiGame}/news/events?lang=ja`);
        if (newsResponse.ok) {
            const newsData = await newsResponse.json();
            renderApiNews(newsData);
        } else {
            container.innerHTML = '<p style="color:var(--text-secondary);">取得できませんでした。手動で追加してください。</p>';
        }
    } catch (error) {
        console.error('API Error:', error);
        container.innerHTML = '<p style="color:var(--text-secondary);">取得に失敗しました。</p>';
    }
}

function renderApiEvents(data) {
    const container = document.getElementById('apiEventList');
    
    if (!data || !data.events || data.events.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary);">現在のイベントはありません</p>';
        return;
    }
    
    container.innerHTML = data.events.map(event => {
        const endDate = new Date(event.end_time * 1000);
        const now = new Date();
        const remaining = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
        
        return `
            <div class="event-card" style="border-left-color:var(--success);">
                <div class="event-name">${event.name}</div>
                <div class="event-date">〜 ${endDate.toLocaleDateString('ja-JP')}</div>
                ${event.special_reward ? `<div class="event-reward">報酬: ${event.special_reward}</div>` : ''}
                <div class="event-remaining">${remaining > 0 ? `残り ${remaining} 日` : '終了'}</div>
            </div>
        `;
    }).join('');
}

function renderApiNews(data) {
    const container = document.getElementById('apiEventList');
    
    if (!data || data.length === 0) {
        container.innerHTML = '<p style="color:var(--text-secondary);">ニュースがありません</p>';
        return;
    }
    
    container.innerHTML = data.slice(0, 5).map(news => `
        <div class="event-card" style="border-left-color:var(--accent-hsr);">
            <div class="event-name">${news.title}</div>
            <div class="event-date">${new Date(news.createdAt).toLocaleDateString('ja-JP')}</div>
            <a href="${news.url}" target="_blank" style="color:var(--warning);font-size:0.85rem;">詳細を見る →</a>
        </div>
    `).join('');
}

// ===== アップデート前チェック =====
function initUpdateChecklist() {
    document.getElementById('saveUpdateDate').addEventListener('click', () => {
        const game = appState.currentGame;
        const date = document.getElementById('nextUpdateDate').value;
        appState.nextUpdateDates[game] = date;
        saveData();
        alert('アップデート日時を保存しました');
    });
}

function renderUpdateChecklist() {
    const game = appState.currentGame;
    const checklist = gameData[game].updateChecklist;
    const container = document.getElementById('updateChecklist');
    
    if (appState.nextUpdateDates[game]) {
        document.getElementById('nextUpdateDate').value = appState.nextUpdateDates[game];
    }
    
    container.innerHTML = checklist.map(item => {
        const isChecked = appState.updateChecks[game]?.[item.id] || false;
        const memo = appState.updateMemos[game]?.[item.id] || '';
        
        return `
            <div class="update-check-item">
                <div class="check-header">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} 
                        onchange="toggleUpdateCheck('${game}', '${item.id}')">
                    <span class="check-label">${item.label}</span>
                </div>
                <textarea placeholder="メモを入力（アプデ後にウィークリーへ引継ぎされます）"
                    onchange="updateMemo('${game}', '${item.id}', this.value)">${memo}</textarea>
            </div>
        `;
    }).join('');
    
    container.innerHTML += `
        <button onclick="transferMemos('${game}')" 
            style="margin-top:20px;width:100%;padding:15px;background:var(--warning);color:var(--text-dark);border:none;border-radius:8px;cursor:pointer;font-weight:700;">
            📋 メモをウィークリーへ引継ぐ
        </button>
    `;
}

function toggleUpdateCheck(game, itemId) {
    if (!appState.updateChecks[game]) appState.updateChecks[game] = {};
    appState.updateChecks[game][itemId] = !appState.updateChecks[game][itemId];
    saveData();
}

function updateMemo(game, itemId, value) {
    if (!appState.updateMemos[game]) appState.updateMemos[game] = {};
    appState.updateMemos[game][itemId] = value;
    saveData();
}

function transferMemos(game) {
    const memos = appState.updateMemos[game] || {};
    const checklist = gameData[game].updateChecklist;
    
    let transferred = 0;
    checklist.forEach(item => {
        const memo = memos[item.id];
        if (memo && memo.trim()) {
            appState.inheritedTasks[game].push({
                label: `${item.label}: ${memo}`,
                reward: null,
                completed: false,
                createdAt: Date.now()
            });
            transferred++;
        }
    });
    
    if (transferred > 0) {
        appState.updateMemos[game] = {};
        appState.updateChecks[game] = {};
        saveData();
        render();
        alert(`${transferred}件のタスクをウィークリーへ引継ぎました`);
    } else {
        alert('引継ぐメモがありません');
    }
}

// ===== カレンダー =====
function initCalendar() {
    document.getElementById('prevMonth').addEventListener('click', () => {
        appState.calendarDate.setMonth(appState.calendarDate.getMonth() - 1);
        renderCalendar();
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        appState.calendarDate.setMonth(appState.calendarDate.getMonth() + 1);
        renderCalendar();
    });
}

function renderCalendar() {
    const date = appState.calendarDate;
    const year = date.getFullYear();
    const month = date.getMonth();
    
    document.getElementById('currentMonth').textContent = `${year}年${month + 1}月`;
    
    const grid = document.getElementById('calendarGrid');
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = firstDay.getDay();
    
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    let html = days.map(d => `<div class="calendar-header">${d}</div>`).join('');
    
    const prevLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
        html += `<div class="calendar-day other-month">${prevLastDay - i}</div>`;
    }
    
    const today = new Date();
    const game = appState.currentGame;
    const events = appState.events[game] || [];
    
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const currentDate = new Date(year, month, day);
        const isToday = currentDate.toDateString() === today.toDateString();
        
        const hasEvent = events.some(event => {
            const start = new Date(event.start);
            const end = new Date(event.end);
            return currentDate >= start && currentDate <= end;
        });
        
        const classes = ['calendar-day'];
        if (isToday) classes.push('today');
        if (hasEvent) classes.push('has-event');
        
        html += `<div class="${classes.join(' ')}" onclick="showCalendarEvents(${year}, ${month}, ${day})">${day}</div>`;
    }
    
    const remaining = 42 - (startDay + lastDay.getDate());
    for (let i = 1; i <= remaining; i++) {
        html += `<div class="calendar-day other-month">${i}</div>`;
    }
    
    grid.innerHTML = html;
}

function showCalendarEvents(year, month, day) {
    const date = new Date(year, month, day);
    const game = appState.currentGame;
    const events = appState.events[game] || [];
    const container = document.getElementById('calendarEvents');
    
    const dayEvents = events.filter(event => {
        const start = new Date(event.start);
        const end = new Date(event.end);
        return date >= start && date <= end;
    });
    
    if (dayEvents.length === 0) {
        container.innerHTML = `<p style="color:var(--text-secondary);">${month + 1}/${day} のイベントはありません</p>`;
        return;
    }
    
    container.innerHTML = `
        <h4 style="margin-bottom:10px;">${month + 1}/${day} のイベント</h4>
        ${dayEvents.map(event => `
            <div style="padding:10px;background:var(--bg-card);border-radius:8px;margin-bottom:10px;">
                <div style="font-weight:700;">${event.name}</div>
                ${event.reward ? `<div style="color:var(--warning);font-size:0.85rem;">報酬: ${event.reward}</div>` : ''}
            </div>
        `).join('')}
    `;
}

// ===== 通知 =====
function initNotifications() {
    if ('Notification' in window) {
        Notification.requestPermission();
    }
}

function sendNotification(title, body, tag) {
    if ('Notification' in window && Notification.permission === 'granted') {
        const notification = new Notification(title, {
            body: body,
            icon: '🎮',
            tag: tag,
            requireInteraction: true
        });
        
        notification.onclick = () => {
            window.focus();
            notification.close();
        };
        
        setTimeout(() => notification.close(), 10000);
    }
}

function checkNotifications() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const day = now.getDay();
    const todayKey = now.toDateString();
    
    // 毎日21時
    if (hour === 21 && minute === 0) {
        const notifKey = `daily_${todayKey}`;
        if (!appState.notifications[notifKey]) {
            checkIncompleteTasksNotification();
            appState.notifications[notifKey] = true;
            saveData();
        }
    }
    
    // 日曜9時
    if (day === 0 && hour === 9 && minute === 0) {
        const notifKey = `update_${todayKey}`;
        if (!appState.notifications[notifKey]) {
            sendNotification(
                '📅 アップデート情報を確認',
                '次回アップデートの日時を確認・入力してください',
                'update-reminder'
            );
            appState.notifications[notifKey] = true;
            saveData();
        }
    }
    
    // Wishlistの期限チェック
    checkWishlistDeadlines();
}

function checkIncompleteTasksNotification() {
    const incompleteGames = [];
    
    ['genshin', 'zzz', 'hsr'].forEach(game => {
        const dailyTasks = gameData[game].dailyTasks;
        const completed = dailyTasks.filter(t => appState.tasks[game]?.daily?.[t.id]).length;
        if (completed < dailyTasks.length) {
            incompleteGames.push(gameData[game].name);
        }
    });
    
    if (incompleteGames.length > 0) {
        sendNotification(
            '⚠️ デイリー未完了',
            `${incompleteGames.join('、')} のデイリータスクが未完了です`,
            'incomplete-daily'
        );
    }
}

function checkWishlistDeadlines() {
    const now = new Date();
    const todayKey = now.toDateString();
    
    appState.wishlist.forEach(wish => {
        if (wish.deadline && !wish.completed) {
            const deadline = new Date(wish.deadline);
            const remaining = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
            
            // 1日前に通知
            if (remaining === 1) {
                const notifKey = `wish_${wish.id}_${todayKey}`;
                if (!appState.notifications[notifKey]) {
                    sendNotification(
                        '💟 Wishlist期限間近',
                        `「${wish.title}」の期限が明日です！`,
                        `wish-deadline-${wish.id}`
                    );
                    appState.notifications[notifKey] = true;
                    saveData();
                }
            }
        }
    });
}

// ===== タイマー =====
function startTimers() {
    updateResetTimers();
    setInterval(updateResetTimers, 1000);
    setInterval(() => {
        checkNotifications();
        checkAutoReset();
    }, 60000);
    checkNotifications();
    checkAutoReset();
}

function updateResetTimers() {
    const game = appState.currentGame;
    const now = new Date();
    
    const dailyResetHour = gameData[game].dailyReset;
    let dailyReset = new Date(now);
    dailyReset.setHours(dailyResetHour, 0, 0, 0);
    if (now >= dailyReset) {
        dailyReset.setDate(dailyReset.getDate() + 1);
    }
    
    const dailyDiff = dailyReset - now;
    document.getElementById('dailyResetTimer').textContent = formatTime(dailyDiff);
    
    const weeklyResetInfo = gameData[game].weeklyReset;
    let weeklyReset = new Date(now);
    weeklyReset.setHours(weeklyResetInfo.hour, 0, 0, 0);
    
    const daysUntilReset = (weeklyResetInfo.day - now.getDay() + 7) % 7;
    if (daysUntilReset === 0 && now >= weeklyReset) {
        weeklyReset.setDate(weeklyReset.getDate() + 7);
    } else {
        weeklyReset.setDate(weeklyReset.getDate() + daysUntilReset);
    }
    
    const weeklyDiff = weeklyReset - now;
    document.getElementById('weeklyResetTimer').textContent = formatTime(weeklyDiff);
}

function formatTime(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}
// ===== タイマー =====
function startTimers() {
    updateResetTimers();
    setInterval(updateResetTimers, 1000);
    setInterval(() => {
        checkNotifications();
        checkAutoReset();
    }, 60000);
    checkNotifications();
    checkAutoReset();
}

function updateResetTimers() {
    const game = appState.currentGame;
    const now = new Date();
    
    // デイリーリセット
    const dailyResetHour = gameData[game].dailyReset;
    let dailyReset = new Date(now);
    dailyReset.setHours(dailyResetHour, 0, 0, 0);
    if (now >= dailyReset) {
        dailyReset.setDate(dailyReset.getDate() + 1);
    }
    
    const dailyDiff = dailyReset - now;
    document.getElementById('dailyResetTimer').textContent = formatTimeShort(dailyDiff);
    
    // ウィークリーリセット
    const weeklyResetInfo = gameData[game].weeklyReset;
    let weeklyReset = new Date(now);
    weeklyReset.setHours(weeklyResetInfo.hour, 0, 0, 0);
    
    const daysUntilReset = (weeklyResetInfo.day - now.getDay() + 7) % 7;
    if (daysUntilReset === 0 && now >= weeklyReset) {
        weeklyReset.setDate(weeklyReset.getDate() + 7);
    } else {
        weeklyReset.setDate(weeklyReset.getDate() + daysUntilReset);
    }
    
    const weeklyDiff = weeklyReset - now;
    document.getElementById('weeklyResetTimer').textContent = formatTimeLong(weeklyDiff);
}

// デイリー用（時:分:秒）
function formatTimeShort(ms) {
    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// ウィークリー用（◯日 時:分:秒）
function formatTimeLong(ms) {
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);
    
    if (days > 0) {
        return `${days}日 ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

