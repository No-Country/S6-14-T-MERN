import styled from 'styled-components'

const UserProfile = () => {
  const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 2rem;

h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.6px;
}
`
  const UserData = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    gap: 3rem;

h4  {
    font-weight: 400;
    text-align: center;
    font-size: 32px;
    line-height: 39px
}

@media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
`
  const CardAvatar = styled.div`
    display:flex;
    flex-direction: column;

h4 {
    margin-bottom: 20px;
}

@media(max-width: 600px) {
    margin-top: 50px;
}
`

  const AvatarData = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.6px;
    margin: 5px;

button {
    margin-top: 10px;
    padding: 5px 8px 5px 8px;
    cursor: pointer;
    background-color: #080808;
    border: 1px solid #D9FF3D;
    color: #D9FF3D;
    border-radius: 4px;
}

@media(max-width: 600px) {
    display: flex;
    align-items: center;
}
`

  const UserTable = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    margin: 40px;

h4 {
    display:flex;
    align-items: flex-start;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px
}

@media(max-width: 600px) {
    h4 {
        display: flex;
        justify-content: center;
    }
}
`

  const DataTable = styled.table`
    border-collapse: collapse;
    background-color: #fff5;
    backdrop-filter: blur(15px);
    box-shadow: 0 .4rem .8rem #0005;
    border-radius: .8rem;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;

    table, tr {
        padding: .35em;
    }

    table, th,
    table, td {
        padding: .625em;
        text-align: center;
    }

    table, th {
        font-size: .85em;
        letter-spacing: .1em;
        text-transform: uppercase;
    }

    @media (max-width: 600px) {
        table {
            border: 1px solid;
        }

        table, thead {
            border: none;
            clip: rect(0 0 0 0);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute;
            width: 1px;
        }

        table, tr {
            border-bottom: 5px solid #090808;
            display: block;
        }

        table, td {
            border-bottom: 1px solid #30363d;
            display: block;
            font-size: .8em;
            text-align: right;
        }

        td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        
    }


    {/*border-collapse: collapse;
    width: 100%;
    margin: 0 auto;
    line-height: 1.4;

    td, th {
    padding: 8px;
    border: 1px solid #ddd;
  }

  td.col-1 { order: 1; }
  td.col-2 { order: 2; }
  td.col-3 { order: 3; }
  td.col-4 { order: 4; }
  td.col-5 { order: 5; }
  td.col-6 { order: 6; }
  td.col-7 { order: 7; }
  td.col-8 { order: 8; }
  td.col-9 { order: 9; }
  td.col-10 { order: 10; }
  td.col-11 { order: 11; }

@media (max-width: 600px) {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    td {
      width: 100%;
      text-align: right;
      padding: 4px;
    }

    td:before {
      content: attr(data-label);
      text-transform: uppercase;
      margin-right: 10px;
    }
}*/}
`
  return (
    <ProfileSection>
      <h2>Perfil de Usuario</h2>
      <h3>Hola...</h3>
      <UserData>
        <CardAvatar>
          <h4>Mis Datos</h4>
          <img src='https://res.cloudinary.com/dx7jgyz9f/image/upload/v1676918455/logo_custom_sports3_1_r5iivu.png' />
        </CardAvatar>
        <AvatarData>
          <p>Nombre: Agustin</p>
          <p>Apellido: Ramirez</p>
          <p>Email: example@example.com</p>
          <p>Contraseña: ********</p>
          <button>Editar</button>
        </AvatarData>
      </UserData>
      <UserTable>
        <h4>Últimos Pedidos</h4>
        <DataTable>
          <thead>
            <tr>
              <th>Nro. Orden</th>
              <th>Fecha</th>
              <th>Productos</th>
              <th>Modelo</th>
              <th>Color Base</th>
              <th>2D Color</th>
              <th>Shorts</th>
              <th>Medias</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Estatus</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label='nro-order'>-</td>
              <td data-label='date'>-</td>
              <td data-label='products'>-</td>
              <td data-label='model'>-</td>
              <td data-label='base-color'>-</td>
              <td data-label='second-color'>-</td>
              <td data-label='shorts'>-</td>
              <td data-label='socks'>-</td>
              <td data-label='quantity'>-</td>
              <td data-label='total'>-</td>
              <td data-label='status'>-</td>
            </tr>
            <tr>
              <td data-label='nro-order'>-</td>
              <td data-label='date'>-</td>
              <td data-label='products'>-</td>
              <td data-label='model'>-</td>
              <td data-label='base-color'>-</td>
              <td data-label='second-color'>-</td>
              <td data-label='shorts'>-</td>
              <td data-label='socks'>-</td>
              <td data-label='quantity'>-</td>
              <td data-label='total'>-</td>
              <td data-label='status'>-</td>
            </tr>
            <tr>
              <td data-label='nro-order'>-</td>
              <td data-label='date'>-</td>
              <td data-label='products'>-</td>
              <td data-label='model'>-</td>
              <td data-label='base-color'>-</td>
              <td data-label='second-color'>-</td>
              <td data-label='shorts'>-</td>
              <td data-label='socks'>-</td>
              <td data-label='quantity'>-</td>
              <td data-label='total'>-</td>
              <td data-label='status'>-</td>
            </tr>
          </tbody>
        </DataTable>
      </UserTable>
    </ProfileSection>
  )
}

export { UserProfile }
