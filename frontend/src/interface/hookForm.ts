import { FieldValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface HookForm {
	register: UseFormRegister<FieldValues>
    errors: { [x:string]: any }
	handleSubmit: UseFormHandleSubmit<FieldValues>
}