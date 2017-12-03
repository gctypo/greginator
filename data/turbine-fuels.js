data.add("turbine fuels",[
	{
		name: "Steam",
		multiplier:1,
		fuels:[
			{
				name: "Steam",
				multiplier:0.5,
				fuel_value: 1
			},
			{
				name: "Superheated Steam",
				fuel_value: 1
			},
		]
	},
	{
		name:"Gas",
		multiplier:1,
		fuels:[
			{
				name:"Methane",
				fuel_value: 45
			},
			{
				name:"Hydrogen",
				fuel_value: 15
			},
			{
				name:"Biogas",
				fuel_value: 32
			}
		]
	},
	{
		name:"Plasma",
		multiplier:40,
		fuels:[
			{
				name: "Helium Plasma",
				fuel_value: 4096
			},
			{
				name: "Oxygen Plasma",
				fuel_value: 16384
			},
			{
				name: "Sulfur Plasma",
				fuel_value: 32768
			},
			{
				name: "Nitrogen Plasma",
				fuel_value: 14336
			},
			{
				name: "Iron Plasma",
				fuel_value: 57344
			},
			{
				name: "Nickel Plasma",
				fuel_value: 59392
			},
		]
	}
]);
