window.onload = function() {
    createBarChart();
    createLineChart();
    loadConnect4();
    loadTicTacToe();
    loadCarAi();
};

function loadConnect4() {
    var unityInstance = UnityLoader.instantiate("connect4Container", "unity/Connect-4/Build/Built connect-4.json", {onProgress: UnityProgress});
}

function loadTicTacToe() {
    var unityInstance = UnityLoader.instantiate("ticTacToeContainer", "unity/Tic-Tac-Toe/Build/Test build.json", {onProgress: UnityProgress});
}

function loadCarAi() {
    var unityInstance = UnityLoader.instantiate("carAiContainer", "unity//Car AI/Build/Car AI Build.json", {onProgress: UnityProgress});
}
