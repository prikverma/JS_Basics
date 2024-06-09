// wap to find out how many 1 and 0 in a given number= 100110011

function binarycount(number) {
    let one = 0
    let zero = 0
    let normalize = number.replace(/[^0-1]/g, "").toString()


    for (i = 0; i < normalize.length; i++) {
        if (normalize[i] === '1') {
            one++;
        } else if (normalize[i] === '0') {
            zero++;

        }

    }
    console.log("one's counts are:", one)
    console.log("zero counts are:", zero)

}
const binarystr = "0110109076001";
binarycount(binarystr)