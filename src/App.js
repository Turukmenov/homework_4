import React from "react"
import { useState } from "react"

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div style={{display: 'flex', gap: '100px', alignItems: 'center', margin: '50px auto', justifyContent: 'center'}}>
      
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{width: '600px', hight: '50px', backgroundColor: '#b781f3', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', color: 'white', textAlign: 'center'}}><h1>REGISTER</h1></div>
        <div style={{width: '600px', hight: '1200px', backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',}}>

          <form onSubmit={handleSubmit}>
            <div style={{width: '600px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '50px', margin: '100px auto'}}>
              <label>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontSize: '14px', color: '#333'}}>name</span>
                  <input id="name" style={{width: '200px', fontSize: '16px'}} value={formData.name} onChange={handleChange}></input>
                </div>
              </label>
              
              <label>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontSize: '14px', color: '#333'}}>number</span>
                  <input id="number" style={{width: '200px', fontSize: '16px'}} value={formData.number} onChange={handleChange}></input>
                </div>
              </label>
              
              <label>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontSize: '14px', color: '#333'}}>email</span>
                  <input id="email" style={{width: '200px', fontSize: '16px'}} value={formData.email} onChange={handleChange}></input>
                </div>
              </label>
              
              <label>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span style={{fontSize: '14px', color: '#333'}}>password</span>
                  <input id="password" style={{width: '200px', fontSize: '16px'}} value={formData.password} onChange={handleChange}></input>
                </div>
              </label>
              
            </div>

          </form>

        </div>
      </div>
        
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{width: '600px', hight: '50px', backgroundColor: '#b781f3', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', color: 'white', textAlign: 'center'}}><h1>DATA</h1></div>
        <div style={{width: '600px', hight: '1200px', backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px',}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: '30px', margin: '58px', fontSize: '24px'}}>
            <div>Имя: <span>{formData.name}</span></div>
            <div>Номер: <span>{formData.number}</span></div>
            <div>Почта: <span>{formData.email}</span></div>
            <div>Пароль: <span>{formData.password}</span></div>
          </div>
        </div>
      </div>

    </div>
  )
}