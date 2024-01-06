let VNMoneyFormat = new Intl.NumberFormat();

export const formatMoney = (money) => {
    return VNMoneyFormat.format(money)
}