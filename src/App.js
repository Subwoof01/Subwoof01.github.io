import "./index.css";
import "./styles/grid_style.css";
import "../node_modules/react-resizable/css/styles.css"
import React, {useState, useEffect} from "react";
import { styled, useTheme } from '@mui/material/styles';
import ReactGridLayout from "react-grid-layout";
import SideBar from './components/sidebar';
import { FormControl, Select, InputLabel } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { ShapeLine, Edit } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import ChartContainer from "./components/chartcontainer";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Add } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import Papa from "papaparse";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

const radialData = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

const percentData = [
  {
    month: '2015.01',
    a: 4000,
    b: 2400,
    c: 2400,
  },
  {
    month: '2015.02',
    a: 3000,
    b: 1398,
    c: 2210,
  },
  {
    month: '2015.03',
    a: 2000,
    b: 9800,
    c: 2290,
  },
  {
    month: '2015.04',
    a: 2780,
    b: 3908,
    c: 2000,
  },
  {
    month: '2015.05',
    a: 1890,
    b: 4800,
    c: 2181,
  },
  {
    month: '2015.06',
    a: 2390,
    b: 3800,
    c: 2500,
  },
  {
    month: '2015.07',
    a: 3490,
    b: 4300,
    c: 2100,
  },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const layout = [
  {i: "0", x: 0, y: 0, w: 1, h: 2},
  {i: "1", x: 1, y: 0, w: 1, h: 2},
  {i: "2", x: 0, y: 1, w: 1, h: 2},
  {i: "3", x: 1, y: 1, w: 1, h: 2},
  {i: "4", x: 0, y: 2, w: 2, h: 2},
]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #EEE',
  boxShadow: 24,
  p: 4,
};

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const chartsArray = [
  {
    id: 0,
    data: data,
    type: "bar",
  },
  {
    id: 1,
    data: pieData,
    type: "pie",
  },
  {
    id: 2,
    data: percentData,
    type: "area",
  }
];

const gender = [];
const ethnicity = [];
const pieEthnicity= [];
const objective = [];
const objectiveData = [];



export default function App() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [shape, setShape] = React.useState('');
  const [chartId, setChartId] = React.useState(null);
  const [charts, setCharts] = React.useState(chartsArray);
  const [sideBarOpen, setSideBarOpen] = React.useState(false);
  const [changeShapeMenuOpen, setChangeShapeMenuOpen] = React.useState(false);
  const [addChartMenuOpen, setAddChartMenuOpen] = React.useState(false);
  const [dataUpdated, setDataUpdated] = React.useState(false);
  const [dataNeedsUpdate, setDataNeedsUpdate] = React.useState(true);

  let chartCount = 0;

  const changeType = (id, t) => {
    let ch = [...charts];
    setCharts(
      ch.map((c) =>
        c.id == id 
          ? { ...c, type: t, data: (t == "bar") ? objectiveData : (t == "area") ? percentData : (t == "pie") ? pieEthnicity : (t == "radar") ? radialData : data }
          : { ...c }
      ));
  }

  const handleChangeButtonClicked = (event) => {
    event.preventDefault();
    event.stopPropagation();
    changeType(chartId, shape);
  }

  
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setChartId(event.currentTarget.children[0].id);
    // addChart(++chartCount, "radial", radialData);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, shape) => {
    setShape(event.target.value);
  };

  const handleOpenChangeShapeScreen = (event) => {
    setAnchorEl(null);
    setChangeShapeMenuOpen(true);
  }
  const handleCloseChangeShapeScreen = (event) => {
    setAnchorEl(null);
    setChangeShapeMenuOpen(false);
  }
  const handleAddChartMenuOpen = (event) => {
    setAnchorEl(null);
    setAddChartMenuOpen(true);
  }
  const handleAddChartMenuClose = (event) => {
    setAnchorEl(null);
    setAddChartMenuOpen(false);
  }


  const addChart = (e, id, t, data) => {
    var object = { id: id, data: (t == "bar") ? objectiveData : (t == "area") ? percentData : (t == "pie") ? pieEthnicity : (t == "radar") ? radialData : data, type: t};
    setCharts([...charts, object]);
  }

  const handleDrawerOpen = () => {
    setSideBarOpen(true);
  };

  const handleDrawerClose = () => {
    setSideBarOpen(false);
  };

  useEffect(() => {
    console.log(charts);
  }, [charts]);

  useEffect(() => {
    if (dataUpdated) {
      setDataUpdated(false);
    
      let ch = [...charts];
      setCharts(
        ch.map((c) =>
          c.id == 1 
            ? { ...c, data: pieEthnicity}
            : { ...c }
        ));
    }
  }, [dataUpdated]);
  
  // TODO: move to own translation layer (class or function?)
  if (dataNeedsUpdate) {
    fetch("./data.csv")
    .then(response => response.text())
    .then(responseText => {
      var csv = Papa.parse(responseText, {header: true});

      csv.data.forEach(e => {
        if (!Boolean(gender[e.gender])) {
          gender[e.gender] = 1;
        }
        else {
          gender[e.gender] += 1;
        }
        
        if (!Boolean(ethnicity[e.ipeds_ethnicity])) {
          ethnicity[e.ipeds_ethnicity] = 1;
        }
        else {
          ethnicity[e.ipeds_ethnicity] += 1;
        }
        
        
        if (!Boolean(objective[e.objective])) {
          objective[e.objective] = 1;
        }
        else {
          objective[e.objective] += 1;
        }
      });

      let counter = 0;
      Object.keys(ethnicity).forEach((key) => {
        if (key != "undefined") {
          pieEthnicity[counter] = { name: key, value: ethnicity[key] };
          counter++; 
        }
      });

      let cap = 0;
      Object.keys(objective).forEach((key) => {
        if (objective[key] > cap) {
          cap = objective[key];
        }
      });

      counter = 0;
      Object.keys(objective).forEach((key) => {
        if (key != "undefined" && key != "PHD" && key != "DMA") {
          objectiveData[counter] = { name: key, value: objective[key]};
          counter++;
        }
      });

      console.log(objectiveData)


      setDataUpdated(true);
    });
    setDataNeedsUpdate(false);
  }

  return (
    <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position="fixed" open={sideBarOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(sideBarOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Education Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer variant="permanent" open={sideBarOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
          <ListItem key="a" disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: sideBarOpen ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={handleAddChartMenuOpen}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: sideBarOpen ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <Add />
              </ListItemIcon>
              <ListItemText primary="Create chart" sx={{ opacity: sideBarOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
      </List>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <ReactGridLayout layout={layout} cols={3} rows={3} rowHeight={150} width={1500}>
        {charts.map((c, idx) => (
          <div key={chartCount++} className="layoutItem" onContextMenu={handleClick}>
            <ChartContainer id={idx} data={c.data} type={c.type} />
          </div>
        ))}
      </ReactGridLayout>
      <Menu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleOpenChangeShapeScreen}>
          <ListItemIcon>
            <ShapeLine fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Change Shape" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Edit fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
      </Menu>
      <Modal
        open={changeShapeMenuOpen}
        onClose={handleCloseChangeShapeScreen}
      >
        <Box sx={style}>
          <div className="content">
            <FormControl fullWidth>
              <InputLabel>Shape</InputLabel>
              <Select
                labelId="shape-select-label"
                id="shape-select"
                value={shape}
                label="Shape"
                onChange={handleChange}
              >
                <MenuItem value={"bar"}>Bar</MenuItem>
                <MenuItem value={"line"}>Line</MenuItem>
                <MenuItem value={"radar"}>Radar</MenuItem>
                <MenuItem value={"pie"}>Pie</MenuItem>
                <MenuItem value={"area"}>Area</MenuItem>
              </Select>
              <Button onClick={handleChangeButtonClicked}>Change</Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
      <Modal
        open={addChartMenuOpen}
        onClose={handleAddChartMenuClose}
      >
        <Box sx={style}>
          <div className="content">
            <FormControl fullWidth>
              <InputLabel>Shape</InputLabel>
              <Select
                labelId="shape-select-label"
                id="shape-select"
                value={shape}
                label="Add Chart"
                onChange={handleChange}
              >
                <MenuItem value={"bar"}>Bar</MenuItem>
                <MenuItem value={"line"}>Line</MenuItem>
                <MenuItem value={"radar"}>Radar</MenuItem>
                <MenuItem value={"pie"}>Pie</MenuItem>
                <MenuItem value={"area"}>Area</MenuItem>
              </Select>
              <Button onClick={(e) => addChart(e, chartCount++, shape, data)}>Add</Button>
            </FormControl>
          </div>
        </Box>
      </Modal>
    </Box>
  </Box>
  );
}
