import Select, { Option } from "react-select";

const Controls = () => {
  const fieldOptions: Option[] = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions: Option[] = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select options={fieldOptions} inputId="sort-field" />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select options={directionOptions} inputId="sort-direction" />
      </div>
    </div>
  );
};

export default Controls;
