import Input from "@/components/form/Input";
import { Form, Formik } from "formik";
import { Search } from "lucide-react";
import React from "react";
interface Prop {
  filterParams: FilterParams;
  onSetFilterParams: (filterParams: FilterParams) => void;
}
const SearchBar: React.FC<Prop> = ({ filterParams, onSetFilterParams }) => {
  const initialValues = {
    name: filterParams.name,
  };
  const submit = (values: typeof initialValues) => {
    onSetFilterParams({
      category: filterParams.category,
      name: values.name,
    });
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submit}>
      {() => (
        <Form className="flex items-center bg-gray-200 rounded-xl px-4">
          <Input name="name" placeholder="Search for product..." />
          <button
            className="cursor-pointer flex items-center justify-between border-l pl-2 text-gray-500"
            type="submit"
          >
            <Search />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
