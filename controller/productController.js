const express = require("express");
const router = express.Router();
const fs = require("fs");

//-------------------------------------------
router.get("/", (yeucau, trave) => {
    dssanpham = [
        { TenSach: "Nguoi cung kho", MoTa: "Kho cung nguoi" },
        { TenSach: "Than So Hoc", MoTa: "Hoc So Than" },
    ];
    trave.render("products", { dssanpham });
});

router.get("/giadung", (yeucau, trave) => {
    trave.render("products");
});

router.get("/maymac", (yeucau, trave) => {
    pageContent = "Hang May Mac !!!";
    trave.send(pageContent);
});

//-------------------------------------------
exports.ProductRouter = router;