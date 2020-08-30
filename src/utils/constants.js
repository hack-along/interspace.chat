const domain = 'meet.jit.si';
const holondomain = 'holons.hackalong.io'

export const JitsiInstances = ["ValuesAndWorldview","HealthAndWellbeing","FoodAndAgriculture","BusinessAndTrade","EnergyAndResources","ClimateChange","EcosystemsAndBiosphere","WaterAvailability","HabitatAndInfrastructure","EconomyAndWealth","GovernanceAndInstitutions","CommunityAndResilience","THΞOS"];

export const RoomURLs = {
	ValuesAndWorldview: {
		jitsi: {
			domain,
			roomName: 'ValuesAndWorldview'
		},
		holon: {
			holondomain,
			roomName: ''
		}
	},
	HealthAndWellbeing: {
		jitsi: {
			domain,
			roomName: 'HealthAndWellbeing'
		},
		holons: {
			domain,
			roomName: ''
		}
	},
	FoodAndAgriculture: {
		jitsi: {
			domain,
			roomName: 'FoodAndAgriculture'
		}
	},
	BusinessAndTrade: {
		jitsi: {
			domain,
			roomName: 'BusinessAndTrade'
		}
	},
	EnergyAndResources: {
		jitsi: {
			domain,
			roomName: 'EnergyAndResources'
		}
	},
	ClimateChange: {
		jitsi: {
			domain,
			roomName: 'ClimateChange'
		}
	},
	EcosystemsAndBiosphere: {
		jitsi: {
			domain,
			roomName: 'EcosystemsAndBiosphere'
		}
	},
	WaterAvailability: {
		jitsi: {
			domain,
			roomName: 'WaterAvailability'
		}
	},
	HabitatAndInfrastructure: {
		jitsi: {
			domain,
			roomName: 'HabitatAndInfrastructure'
		}
	},
	EconomyAndWealth: {
		jitsi: {
			domain,
			roomName: 'EconomyAndWealth'
		}
	},
	GovernanceAndInstitutions: {
		jitsi: {
			domain,
			roomName: 'GovernanceAndInstitutions'
		}
	},
	CommunityAndResilience: {
		jitsi: {
			domain,
			roomName: 'CommunityAndResilience'
		}
	},
	THΞOS: {
		jitsi: {
			domain,
			roomName: 'THΞOS'
		}
	}
};

export const RoomNames = Object.keys(RoomURLs);
