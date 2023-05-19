import React from 'react';
import { Checkbox } from 'rsuite'
import TrashIcon from '@rsuite/icons/Trash';
import EditIcon from '@rsuite/icons/Edit';
import { useAdditem } from "../hooks/useAdditem";


function TaskItem ({ data, order }) {
 
  let { dataArr, dispatch } = useAdditem();

    //styling compoinent icons
    const IconTrash =({color, size}) => <TrashIcon style={{ color, fontSize: size, cursor:'pointer' }}/>
    const IconEdit =({color, size}) => <EditIcon style={{ color, fontSize: size, cursor:'pointer' }}/>

    const onSelectionHandler = () => {
      dispatch (
        {
          type: "selection",
          selected: true,
          order: order,
        }
      )
    }

    const deleteHandler = () => {
      data.selected &&
      dispatch (
        {
          type: "delete",
          order: order,
        }
      )
    }

 
  return (
    <div className='w-96 max-h-40 border border-red rounded-xl flex justify-between p-1'>
        {/*left side */}
        <div className="flex items-center mb-4">
            <Checkbox onChange={onSelectionHandler}/>
        </div>

        {/* body */}
        <div>
          <ul className='capitalize flex flex-col'>
            {
              Object.keys(data).map(
                (key,i) => (
                  <li key={i} className={`${i === 0 && "text-red text-lg"}`}>{data[key]}</li>
                )
              )
            }
          </ul>

        </div>

        {/*right side*/}
        <div className='flex flex-col gap-5 mt-3 mr-2'>
            <span onClick={deleteHandler}><IconTrash color = {"yellow"} size={"23px"} /></span>
            <span><IconEdit color = {"yellow"} size={"23px"} /></span>
        </div>
    </div>
  )
}

export default TaskItem