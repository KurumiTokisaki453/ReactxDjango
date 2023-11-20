import { useForm } from 'react-hook-form'
import { createTask, deleteTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom'

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState : {errors}
  } = useForm();

  // import variables para fácil uso
  const navegar = useNavigate();
  const paramet = useParams();
  console.log("Antes del params.")
  console.log(paramet)

  const onSubmit = handleSubmit(async data => {
    const responde = await createTask(data)
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

      {paramet.id && <button
        onClick={async () => {
          const aceptado = window.confirm("¿Estas seguro?")
          if (aceptado) {
            await deleteTask(paramet.id);
            navegar("/pages");
          }
        }}
      >
        Delete
      </button>}

    </div>
  )
}

