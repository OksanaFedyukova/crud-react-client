import React from "react";

import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import '../SelectInput/SelectInput.scss';


const SelectInput = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>Select Coder</label>
      <Controller id='controlerDate'
        name="coders"
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: "oksana", label: "Oksana" },
              { value: "carla", label: "Carla" },
              { value: "judith", label: "Judith" }
            ]}
          />
        )}
        control={control}
        defaultValue=""
      />
      
    </Form>
  );
};
export default SelectInput 