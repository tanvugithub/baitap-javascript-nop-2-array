document.addEventListener("DOMContentLoaded", function () {

    const btnSumDuong = document.getElementById('btn-tong-so-duong');

    const txtResult = document.getElementById('txt-result');
    const numbersInput = document.getElementById('numbers-input');
    const txtError = document.getElementById("txt-error");

    numbersInput.addEventListener("keydown", () => {
        if (txtError.innerText !== "") {
            txtError.innerHTML = "";
        }
    })

    // Tổng số dương: 
    btnSumDuong.addEventListener("click", (e) => {
        e.preventDefault();

        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }

        const numbers = numbersInput.value.trim().split(',');

        // let sum = 0;
        // numbers.forEach((item, index) => {
        //     if (+item > 0) {
        //         sum += +item;
        //     }
        // })

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        const sum = numbers1.reduce((prev, curr, index) => {
            if (curr > 0) {
                return prev + curr;
            } else {
                return prev;
            }
        }, 0)

        txtResult.innerHTML = `Tổng số dương trong dãy số là: ${sum}`;
    })

    // Đếm số dương:

    document.getElementById('btn-dem-so-duong').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');
        let count = 0;

        numbers.forEach((item) => {
            if (+item > 0) count++;
        })

        txtResult.innerHTML = `Có ${count} số dương trong dãy số.`;
    })

    //Số nhỏ nhất
    document.getElementById('btn-min').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        let min = +numbers[0];

        numbers.forEach((item, index) => {
            if (+item < min) min = +item;
        })

        txtResult.innerHTML = `${min} là số nhỏ nhất trong dãy số.`;
    })

    //Số dương nhỏ nhất
    document.getElementById('btn-duong-min').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        // Map ra 1 mảng số dương
        const numbers1 = [];
        numbers.forEach((item) => {
            if (+item > 0) numbers1.push(+item);
        })

        if (numbers1.length > 0) {
            let min = numbers1[0];
            numbers1.forEach((item) => {
                if (item < min) min = item;
            })

            txtResult.innerHTML = `${min} là số dương nhỏ nhất trong dãy số.`;
        } else {
            txtResult.innerHTML = `Không có số dương trong dãy số`;
        }
    })

    //Số chẵn cuối cùng
    document.getElementById('btn-chan-cuoi-cung').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        let soChan = 0;
        numbers.forEach((item) => {
            if (+item > 0 && +item % 2 == 0) soChan = +item;
        })

        txtResult.innerHTML = `Số chẵn cuối cùng là: ${soChan}`;

    })

    //Sắp xếp tăng
    document.getElementById('btn-sort-asc').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        let swapped;

        do {
            swapped = false;
            for (let i = 0; i < numbers1.length - 1; i++) {
                if (numbers1[i] > numbers1[i + 1]) {
                    let temp = numbers1[i];
                    numbers1[i] = numbers1[i + 1];
                    numbers1[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);

        txtResult.innerHTML = `Dãy số sau khi sắp xếp là: ${numbers1}`;
    })

    //Nguyên tố đầu tiên
    document.getElementById('btn-nguyen-to').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        const nguyenToFirst = numbers1.find((item) => {
            if (item > 1) {
                if (item === 2) {
                    return item;
                }

                let nguyenTo = true;
                for (let i = 2; i < item; i++) {
                    if (item % i === 0) {
                        nguyenTo = false;
                    }
                }

                if (nguyenTo === true) return item;
            }

        })


        txtResult.innerHTML = `Số nguyên tố đầu tiên là: ${nguyenToFirst}`;
    })

    //Đếm số nguyên
    document.getElementById('btn-so-nguyen').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        let count = 0;

        numbers1.forEach((item) => {
            if (Number.isInteger(item)) count++;
        })

        if (count > 0)
            txtResult.innerHTML = `Có ${count} số nguyên`;
        else
            txtResult.innerHTML = `Không có số nguyên nào`;
    })

    //So sánh số âm, số dương
    document.getElementById('btn-am-duong').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        let soAm = 0;
        let soDuong = 0;

        numbers1.forEach((item) => {
            if (item >= 0) soDuong++
            else
                soAm++;
        })

        txtResult.innerHTML = `Có ${soAm} số âm và ${soDuong} số dương`;
    })

    //Swap
    document.getElementById('btn-swap').addEventListener("click", (e) => {
        e.preventDefault();
        if (numbersInput.value === "") {
            txtError.innerHTML = "Vui lòng nhập dãy số";
        } else {
            txtError.innerHTML = "";
        }
        const numbers = numbersInput.value.trim().split(',');

        //chuyển thành mảng số
        let numbers1 = numbers.map(item => +item);

        const pos1Input = document.getElementById('vi-tri-1').value;
        const pos2Input = document.getElementById('vi-tri-2').value;

        let temp = numbers1[pos1Input];
        numbers1[pos1Input] = numbers1[pos2Input];
        numbers1[pos2Input] = temp;

        let str = "Mảng sau khi đổi vị trí là: ";
        numbers1.forEach((item, index) => {
            if (index < numbers1.length - 1) {
                str += `${item}, `;
            } else {
                str += `${item}`;
            }

        })
        txtResult.innerHTML = str;
    })
});


