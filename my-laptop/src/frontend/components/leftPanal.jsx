import React from "react";

const LeftPanal = (props) => {

  const showCheckboxes = (label, arr, name, selArr) => {
    return (
      <div key={label}>
        <label className="form-check-label">{label}</label>
        {arr.map((n) => (
          <div className="form-check">
            <input
              className="form-check-input"
              value={n}
              type="checkbox"
              name={name}
              checked={selArr?.findIndex((sel) => sel == n) >= 0}
              onChange={handleChange}
            />
            <label className="form-check-label">{n}</label>
          </div>
        ))}
      </div>
    );
  };

const  showRadio = (label,arr,name,selArr) =>{
    return  (
          <div>
              <label className="form-check-label">{label}</label>
              {
                  arr.map((n)=>(
                      <div className="form-check">
                          <input 
                          className="form-check-input"
                          value={n}
                         type="radio"
                         name={name}    
                         checked={selArr == n}
                         onChange={handleChange}
                   />
                   <label className="form-check-label">{n}</label>
                      </div>
                  ))
              }
          </div>
      )
  }

  const handleChange = (e) => {
    
    let s1 = { ...props.optionsSel };
    let { currentTarget: input } = e;
    input.name === "brand"
      ? (s1.brand = updateCBs(input.checked, input.value, s1.brand))
      : input.name === "ram"
      ? (s1.ram = updateCBs(input.checked, input.value, s1.ram))
      : (s1[input.name] = input.value);
    props.SetOptionsSel(s1)
  };

  const updateCBs = (checked, value, arr) => {
    if (checked) arr.push(value);
    else {
      let index = arr.findIndex((ele) => ele == value);
      if (index >= 0) arr.splice(index, 1);
    }
    return arr;
  };

  let { optionsArray, optionsSel } = props;

  return (
    <div className="container aside">
      <h4 className="mt-2">Choose Options</h4>
      <button className="btn btn-warning btn-sm" onClick={props.onClear}>
        Clear All
      </button>
      <br />

      {showCheckboxes(
        "Brand",
        optionsArray.brand,
        "brand",
        optionsSel.brand
      )}
      {showCheckboxes(
        "Ram",
        optionsArray.ram,
        "ram",
        optionsSel.ram
      )}
      {showRadio(
        "Processor",
        optionsArray.processor,
        "processor",
        optionsSel.processor
      )}
      {showRadio(
        "Rating",
        optionsArray.rating,
        "rating",
        optionsSel.rating
      )}
    </div>
  );
};

export default LeftPanal;
