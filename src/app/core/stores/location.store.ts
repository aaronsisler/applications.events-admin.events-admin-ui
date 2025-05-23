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
      getAll: (): void => {
        locationService.getList().subscribe({
          next: (locations) => {
            patchState(store, () => ({ locations, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
      postAll: (locations: Location[]): void => {
        locationService.postList(locations).subscribe({
          next: (newLocations) => {
            patchState(store, () => ({
              establishments: [...store.locations(), ...newLocations],
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
