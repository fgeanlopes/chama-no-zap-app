import styled from 'styled-components/native';

export const ImgFundo = styled.ImageBackground`
     width:100%;
`;

export const Tela = styled.KeyboardAvoidingView`
     flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.View`
    flex: 1;
    background: transparent;
    align-Items: center;
    justify-content: center;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`;

export const Logo = styled.View`

`;
export const Titulo = styled.Text`
    font-family: sans-serif;
    color: #fff;
    line-height: 40px;
    width:100%;
    padding-left:38px;
    text-align:left;
    font-size:25px;
`;

// export const Descricao = styled.Text`
//     font-size: 20px;
//     color: #fff;
//     font-family: sans-serif;
//     margin-bottom: 15px;
//     width: 100%;
//     text-align: left;
//     padding-bottom:5px;
//      borderColor: #fff;
//     borderStyle: solid;
//     borderWidth: 1px;
//     borderTopWidth: 0;
//     borderRightWidth: 0;
//     borderLeftWidth: 0;
// `;

export const CampoEntrada = styled.TextInput`
    height: 50px;
   font-family: sans-serif;
    font-size: 22px;
    margin: 10px 0 60px 0;
    textAlign: center;
    width: 100%;
    color:#fff;

    borderColor: #fff;
    borderStyle: solid;
    borderWidth: 1px;
    borderTopWidth: 0;
    borderRightWidth: 0;
    borderLeftWidth: 0;
`;
export const BtnEnviar = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    marginTop:-15px;
    height: 60px;
    borderRadius:10px;
    border:2px solid #25d366;
    background:#25d366;
`;

export const TituloBtn = styled.Text`
    color: #fff;
    font-size:30px;
    font-family: sans-serif;
    fontWeight: 500;
`;


