import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom'

export function TaskFormPage() {
  const {
    register,
    handleSubmit,
    formState : {errors},
    setValue
  } = useForm();

  // import variables para fácil uso posterior
  const navegar = useNavigate()
  const paramet = useParams()

  const onSubmit = handleSubmit(async data => {
    if (paramet.id) {
      await updateTask(paramet.id, data);
    } else {
      await createTask(data);
    }
    navegar("/pages");
  })

  useEffect(() => {
    async function loadTask() {
      const {data : {title,descripcion},} = await getTask(paramet.id);
      setValue('title', title)
      setValue('descripcion', descripcion)
      // const answer = await getTask(paramet.id);
      // setValue('title', answer.data.title)
      // setValue('descripcion', answer.data.descripcion)
    }
    loadTask();
  }, [])

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

