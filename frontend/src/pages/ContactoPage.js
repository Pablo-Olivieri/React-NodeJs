import {useState} from 'react';
import '../styles/Contacto.css'; 
import axios from 'axios';
import React from 'react';

const ContactoPage = (props) =>{

const initialForm = {
    nombre: '',
    email: '',
    telefono: '',
    mensaje:'',
}

const [sending, setSending] = useState(false);
const [msg, setMsg] = useState('');
const [formData, setFormData] = useState(initialForm);
const handleChange = e =>{
const { name, value} = e.target;
setFormData(oldData => ({
    ...oldData,
    [name] : value
}));

}

const handleSubmit = async e =>{
    e.preventDefault();
    setMsg('');
    setSending(true)
    const response = await
    axios.post('http://localhost:3000/api/contacto', formData);
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false){
        setFormData(initialForm)
    }
}

    return (
      <main className='holder'>
          <div className='columna contacto'>
              <h2>Complete el siguiente formulario</h2>
              <form action ="/contacto" method='post' className='formulario' onSubmit={handleSubmit}>
                  <p>
                    <label>Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>
                    <p>
                    <label>Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                    <label>Teléfono</label>
                    <input type="text" name="telefono"value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                    <label>Mensaje</label>
                    <textarea name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className='centrar'><input type='submit'
                    value='Enviar'/> </p>
                    </form>

                    </div>

                    <div className="columna datos">
                    
                        <h2>Otras vias de contacto</h2>
                        <p>Tambien puede contactarse con nosotros por los siguientes medios</p>

                        <ul>
                            <li>Telefono:(011) 4878-2514</li>
                            <li>Email: developers_sa@developers.com</li>
                            <li>Facebook: Developers</li>
                            <li>Twitter: @developers</li>
                            <li>Instagram: @developers</li>
                            </ul>
                            </div>
                            </main>

    );
}
export default ContactoPage;