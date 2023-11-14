import { useForm } from 'react-hook-form'
import { createTask } from '../api/task.api';
import { useNavigate } from 'react-router-dom'

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState : {errors}
  } = useForm();

  const navegar = useNavigate();

  const onSubmit = handleSubmit(async data => {
    const responde = await createTask(data)
    console.log("Aquí abajo de TaskFormPage.");
    console.log(responde);
    console.log("Aquí arriba de TaskFormPage.");
    navegar("/pages");
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { require: true })}
        />
        {errors.title && <span>ETítulo es requerido.</span>}

        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("descripcion", { require : true })}
          ></textarea>
          {errors.descripcion && <span>Descripción es requerido </span> }
        <button>Save</button>
      </form>
    </div>
  )
}

