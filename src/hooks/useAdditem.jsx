import React from 'react';
const addItemsContext = React.createContext();

let initDataArr = [
    {
    id: 1,
    task: "cake and bake",
    responser: "eldessouki",
    time: "sat"
  },
  {
    id: 2,
    task: "check the flare",
    responser: "haysam",
    time: "sat"
  },
  {
    id: 3,
    task: "CEMS calibration",
    responser: "amr",
    time: "sat"
  }
];

let reducer = (dataArr, action) => {
  if (action.type === "selection") 
   { return [
        ...dataArr,
        {
            ...dataArr[action.order],
            selected: action.selected,
        }
    ]}
    else if (action.type === "delete" ) {
      console.log("deleted");
      return (
        [
          ...dataArr.filter(
            ({selected}) => !selected
          )
        ]
      )
    }
};

export default function ItemsProvider({ children }) {

    let [dataArr, dispatch] = React.useReducer(reducer, initDataArr);
    console.log(dataArr);
    const value = {
    dataArr,
    dispatch,
}

  return (
    <addItemsContext.Provider value={value}>
        {children}
    </addItemsContext.Provider>
  )
}

export const useAdditem = () => {
    return React.useContext (
        addItemsContext
    )
}