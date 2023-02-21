import styled from 'styled-components'

const UserProfile = () => {

const ProfileSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
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
`
const CardAvatar = styled.div`
    display:flex;
    flex-direction: column;

h4 {
    margin-bottom: 20px;
}    
`

const AvatarData = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.6px;

button {
    margin-top: 10px;
    padding: 5px 8px 5px 8px;
    cursor: pointer;
    background-color: #080808;
    color: #D9FF3D;
    border-radius: 4px;
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
    text-align: center;
    font-size: 32px;
    line-height: 39px
}    
`

const DataTable = styled.table`
    width:80%;
th, td {
    border: 1px solid #080808;
    border-radius: 2px;
    padding: 8px;
}
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
                    <p>Nombre:</p>
                    <p>Apellido:</p>
                    <p>Usuario:</p>
                    <p>Email:</p>
                    <p>Dirección:</p>
                    <p>Contraseña:</p>
                    <button>Editar</button>
                </AvatarData>    
            </UserData>
                <UserTable>
                    <h4>Últimos Pedidos</h4>
                <DataTable>
                    <tr>
                        <th>Nro. Orden</th>
                        <th>Fecha</th>
                        <th>Productos</th>
                        <th>Modelo</th>
                        <th>Color Base</th>
                        <th>Color 2dario</th>
                        <th>Shorts</th>
                        <th>Medias</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Estatus</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </DataTable>
            </UserTable>
        </ProfileSection>
    );
}

export { UserProfile }
