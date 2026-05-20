import { UsoresStore } from "../store/usores.store";
import type { Usor, UsorPayload } from "../types";

class UsorService {
  private readonly usoresStore = new UsoresStore(); 

  addere(socketId: string, payload: UsorPayload): Usor {
    
    const usor: Usor = {
      id: socketId,
      nomen: payload.nomen,
      color: payload.color,
      lng: payload.lng,
      lat: payload.lat

    }
    this.usoresStore.addere(socketId, usor);
    return usor;
  }
actualizarePositionem(socketId: string, lng: number, lat: number): boolean {
  return this.usoresStore.actualizarePositionem(socketId, lng, lat);
}
delere(socketId: string): boolean {
  return this.usoresStore.delere(socketId);
}
obtinere(socketId: string): Usor | undefined {
  return this.usoresStore.obtinere(socketId);
}

obtinereOmnes(): Usor[] {
  return this.usoresStore.obtinereOmnes();
}

obtinereAlios(socketId: string): Usor[] {
  return this.usoresStore.obtinereAlios(socketId);
}
}

export const usorService = new UsorService();