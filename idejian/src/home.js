function execute() {
    return Response.success([
        { title: "人气热读榜", input: "/bangdan/36001", script: "gen.js" },
        { title: "小说点击榜", input: "/bangdan/36002", script: "gen.js" },
        { title: "小说收藏榜", input: "/bangdan/36003", script: "gen.js" },
        { title: "新书潜力榜", input: "/bangdan/36004", script: "gen.js" },
        { title: "男生完本榜", input: "/bangdan/36007", script: "gen.js" }
    ]);
}