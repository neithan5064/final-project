import { createTodo } from "@/actions";

import Input from "../input/Input";
import Button from "../button/Button";
import Form from "../input/form/Form";





const AddTodo = () => {
    return (
        <div>
            <Form action={createTodo}>
                <div className="flex gap-2">
                    <Input name="input" type="text" placeholder="Add Todo here ..."/>
                    <Button type="submit" text="Add" bgColor="bg-blue-600"/>
                </div>
            </Form>
        </div>
    );
};
export default AddTodo;