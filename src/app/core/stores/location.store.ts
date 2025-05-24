import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { Location } from "../models/location";
import { LocationService } from "../services/location-service";

interface LocationState {
  locations: Location[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: LocationState = {
  locations: [],
  hasError: false,
  isLoading: true,
};

export const LocationStore = signalStore(
  withState<LocationState>(initialState),
  withMethods((store) => {
    const locationService = inject(LocationService);
    return {
      getAll: (establishmentId: string): void => {
        locationService.getList(establishmentId).subscribe({
          next: (locations) => {
            patchState(store, () => ({ locations, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
      postAll: (establishmentId: string, locations: Location[]): void => {
        locationService.postList(establishmentId, locations).subscribe({
          next: (newLocations) => {
            patchState(store, () => ({
              locations: [...(store.locations() || []), ...newLocations],
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to create establishments", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
