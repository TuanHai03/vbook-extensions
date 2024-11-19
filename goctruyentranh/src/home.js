function execute() {
    return Response.success([
        {title: "Mới nhất", input: "truyen-moi", script: "gen.js"},
        {title: "Mới cập nhật", input: "truyen-moi-cap-nhat", script: "gen.js"},
        {title: "Phổ Biến", input: "truyen-hot", script: "gen.js"},
        {title: "Đánh Giá Cao", input: "truyen-danh-gia", script: "gen.js"},  
        {title: "Được Ưa Thích Nhất", input: "truyen-yeu-thich", script: "gen.js"},
        {title: "Truyện Hoàn Thành", input: "truyen-hoan-thanh", script: "gen.js"},
    ]);
}