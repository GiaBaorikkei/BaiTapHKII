// khởi tạo giá trị state
import { Book, Action } from "../../interface";
// giá trị mảng book khởi tạo ban đầu
// const initialBook:Book[] =JSON.parse(localStorage.getItem("books")||"[]");
let initialBook = [
    {
        id: 1,
        status: "true",
        name: "Harry Potter và Hòn Đá Phù Thủy",
        student: "Nguyễn Văn A"
    },
    {
        id: 2,
        status: "false",
        name: "Đắc Nhân Tâm",
        student: "Trần Thị B"
    },
    {
        id: 3,
        status: "true",
        name: "1984",
        student: "Lê Văn C"
    },
    {
        id: 4,
        status: "false",
        name: "Tiền Không Mua Được Hạnh Phúc",
         student: "Phạm Thị D"
    },
];
// tạo hàm bookreducer
const bookReducer = (state = initialBook, action: Action) => {
    switch (action.type) {
        case "ADD":
            return state;
        case "FILTER":
            console.log("tiến hành lọc");
            let resultFilter = initialBook.filter((item) => {
                return item.status == action.payload;
            });
            return resultFilter;
        default:
            return state;
    }
};
export default bookReducer;