const { Op } = require("sequelize");
const TipsPayment = require("../models/TipsPayment");

exports.getTipsTotalByMonth = async function (req, res) {
    try {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
        const tipsTotal = await TipsPayment.sum("amount", {
            where: {
                created_at: {
                    [Op.and]: [
                        { [Op.gte]: new Date(`${currentYear}-${currentMonth}-01T00:00:00.000Z`) },
                        { [Op.lte]: new Date(`${currentYear}-${currentMonth}-31T23:59:59.999Z`) },
                    ],
                },
            },
        });

        res.status(200).json({ tips_total: tipsTotal || 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
