import { createSlice } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
    name: 'slider',
    initialState: {
        userList:[
            {id:"1",nomComplet:"Abdesselam Belkhiri",photo:"",discovered:false,qrCode:"",avatar:"",message:"Aujourd'hui, je reçois les résultats des rattrapages de mes partiels. Ma note a bien augmenté, mais ce n'est toujours pas suffisant pour avoir mon année. Il me manque 0,044 points. VDM"},
            {id:"2",nomComplet:"Tijane Mkpoumie",photo:"",discovered:false,qrCode:"",avatar:"",message:"By default the modal creates a parent container that uses flex, so in order to center you can comment your left: property that it is set to your modal,"},
            {id:"3",nomComplet:"Graidi Nabil",photo:"",discovered:false,qrCode:"",avatar:"",message:"36 By default the modal creates a parent container that uses flex, so in order to center you can comment your left: property that it is set to your modal,"},
            {id:"4",nomComplet:"Soukaina elys",photo:"",discovered:false,qrCode:"",avatar:"",message:" Il me manque 0,044 points. VDM"},
            {id:"5",nomComplet:"Alain Bouchard",photo:"",discovered:false,qrCode:"",avatar:"",message:"e a bien augmenté, mais ce n'est toujours pas suffisant pour avoir mon année. Il me manque 0,044 points. VDM"},
            {id:"6",nomComplet:"Samantha uide",photo:"",discovered:false,qrCode:"",avatar:"",message:"mois, mon homme entre en trombe dans la chambre, allume la lumière, et dit bien fort: \"T’as pas vu mes chaussettes ?\" Quand je lui fais remarquer qu’on a un bébé qui essaie de dormir, il répond : \"Oh ça va, faut bien continuer à vivre !\" VDM"},
            {id:"7",nomComplet:"Rougab Melanie",photo:"",discovered:false,qrCode:"",avatar:"",message:" dernier cri qu'on m'a offerts pour mon anniversaire, un nouveau modèle sans-fil. Vous savez, ces écouteurs qui se glissent dans l'oreille, si légers qu'on ne sent pas quand ils tombent, et si petits qu'ils passent dans le trou de la bouche d'égout. VDM"},
            {id:"8",nomComplet:"Syd Melonso",photo:"",discovered:false,qrCode:"",avatar:"",message:"Aujourd'hui, je vais m'allonger car prise d'un malaise. Je prend mon téléphone rapidement pour prévenir mon homme, sachant qu'il ne devait pas tarder à arriver. Il me répond : \"Je passe me prendre un McDo et j'arrive."},
            {id:"9",nomComplet:"Pierre Awaragi",photo:"",discovered:false,qrCode:"",avatar:"",message:""}
        ],
        selectedUser: 1,
        openQrModal:false
    },
    reducers: {
        setSelectedUser: (state,action) => {
           state.selectedUser = action.payload
        },
        setCurrentUser: (state,action) => {
            state.userList = action.payload
        },
        toggleModal: (state,action) => {
            state.openQrModal = action.payload
        },
    },
})

export const {setSelectedUser,toggleModal,setCurrentUser} = sliderSlice.actions

export default sliderSlice.reducer