import React, { useState, useContext } from "react";
// import { makeStyles, withStyles } from "@material-ui/core/styles";

// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import InputBase from "@material-ui/core/InputBase";
import { PokemonContext } from "../context/PokemonContext";
// import InputLabel from "@material-ui/core/InputLabel";

import pokemonTypes from "../helpers/pokemonTypes";

// const BootstrapInput = withStyles(theme => ({
//   root: {
//     "label + &": {
//       marginTop: theme.spacing(1)
//     }
//   },
//   input: {
//     position: "relative",
//     backgroundColor: 'white',
//     border: "1px solid #ced4da",
//     fontSize: 9,
//     padding: "6px 10px 6px 8px",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),

//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"'
//     ].join(","),
//     "&:focus": {

//       borderColor: "#80bdff",
//       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
//     }
//   }
// }))(InputBase);

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: 1,
//   }
// }));

// const Selector = () => {
//   const { switchViews, switchType } = useContext(PokemonContext);

//   const classes = useStyles();

//   const [numCards, setNumCards] = useState(10);
//   const [pokemonType, setpokemonType] = useState("All");

//   const handleChange = event => {
//     setNumCards(event.target.value);
//     switchViews(event.target.value);
//   };

//   const handleSearch = event => {
//     setpokemonType(event.target.value);
//     switchType(event.target.value);
//   };

//   return (
//     <div>

//         <FormControl className={classes.margin}>
//           <Select
//             labelId="demo-customized-select-label"
//             id="demo-customized-select"
//             value={numCards}
//             onChange={handleChange}
//             input={<BootstrapInput />}
//           >

//             <MenuItem value={10}>10</MenuItem>
//             <MenuItem value={20}>20</MenuItem>
//             <MenuItem value={50}>50</MenuItem>
//           </Select>
//         </FormControl>

//         <FormControl className={classes.margin}>

//           <Select
//             labelId="demo-customized-select-label"
//             id="demo-customized-select"
//             value={pokemonType}
//             onChange={handleSearch}
//             input={<BootstrapInput />}
//           >
//             {pokemonTypes.map(t => (
//               <MenuItem value={t}>{t}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>

//     </div>
//   );
// };

// export default Selector;

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: 3,
    minWidth: 100
  }
}));

export default function GroupedSelect() {
  const { switchViews, switchType } = useContext(PokemonContext);

  const classes = useStyles();

  const [numCards, setNumCards] = useState(10);
  const [pokemonType, setpokemonType] = useState("All");

  const handleChange = event => {
    setNumCards(event.target.value);
    switchViews(event.target.value);
  };

  const handleSearch = event => {
    setpokemonType(event.target.value);
    switchType(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl} elevation={0}>
        <InputLabel htmlFor="grouped-native-select">Quantity</InputLabel>
        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          value={numCards}
          onChange={handleChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Type</InputLabel>

        <Select
          native
          defaultValue=""
          id="grouped-native-select"
          value={pokemonType}
          onChange={handleSearch}
        >
          {pokemonTypes.map(t => (
              <option value={t}>{t}</option>
            ))}
  
        </Select>
      </FormControl>
    </div>
  );
}
