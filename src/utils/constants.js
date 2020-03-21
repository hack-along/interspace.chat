const domain = "portal.interspace.chat";

export const JitsiInstances = ["Marvin", "Dent", "Zaphod"];

export const RoomURLs = {
  Marvin: {
    jitsi: {
      domain,
      roomName: "Marvin"
    }
  },
  Dent: {
    jitsi: { domain, roomName: "Dent" }
  },
  Zaphod: {
    jitsi: {
      domain,
      roomName: "Zaphod"
    }
  }
};

export const RoomNames = Object.keys(RoomURLs);
