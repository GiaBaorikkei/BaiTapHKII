import { Product, Action } from "../interface/interface";

let initialProduct = [
    {
        id: 1,
        status: "true",
        name: "Pizza",
        quantity: 4,
        price: "30USD",
        introduce:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!"
    },
    {
        id: 2,
        status: "true",
        name: "Hamburger",
        quantity: 3,
        price: "15USD",
                introduce:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!"
    },
    {
        id: 3,
        status: "true",
        name: "Bread",
        quantity: 5,
        price: "20USD",
                introduce:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!"
    },
    {
        id: 4,
        status: "true",
        name: "Cake",
        quantity: 2,
        price: "10USD",
                introduce:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!"
    },
];

const productReducer = (state = initialProduct, action: Action) =>{
    switch (action.type) {
        case "ADD":
            return state;
        case "FILTER":
            let resultFilter = initialProduct.filter((item) => {
                return item.status == action.payload;
            });
            return resultFilter;
        default:
            return state;
    }
};
export default productReducer;
