function execute() {
    return Response.success(
[

{title: "最近更新",input: "/lastupdate/", script: "gen2.js"},
{title: "日点击",input: "/dayvisit/", script: "gen2.js"},
{title: "月点击",input: "/monthvisit/", script: "gen2.js"},
{title: "总点击",input: "/allvisit/", script: "gen2.js"},
]
    
    );
}