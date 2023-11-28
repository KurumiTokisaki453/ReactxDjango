import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast';

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
      toast.success("Tarea Actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff", }
      },)
    } else {
      await createTask(data);
      toast.success("Tarea Creada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff", }
      },)
    }
    navegar("/pages");
  })

  useEffect(() => {
    async function loadTask() {
      if (paramet.id){
        const {data : {title,descripcion},} = await getTask(paramet.id);
        setValue('title', title)
        setValue('descripcion', descripcion)
        // const answer = await getTask(paramet.id);
        // setValue('title', answer.data.title)
        // setValue('descripcion', answer.data.descripcion)
      }
    }
    loadTask();
  }, [])

  return (
    <div className='max-w-x1 mx-auto' >
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { require: true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        />
        {errors.title && <span>ETítulo es requerido.</span>}

        <textarea
          rows="3"
          placeholder="Descripción"
          {...register("descripcion", { require : true })}
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
        ></textarea>
          {errors.descripcion && <span>Descripción es requerido </span> }
        <button
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3"
          >Save
        </button>
      </form>

      {paramet.id && 
      <div className='flex justify-end' >
        <button
        className='bg-red-500 p-3 rounded-lg w-48 mt-3'
        onClick={async () => {
          const aceptado = window.confirm("¿Estas seguro?")
          if (aceptado) {
            await deleteTask(paramet.id);
            toast.success("Tarea Borrada", {
              position: "bottom-right",
              style: {
                background: "#101010",
                color: "#fff", }
            },)
            navegar("/pages");
          }
        }}
      >
        Delete
      </button>
      </div>
      }

    </div>
  )
}

