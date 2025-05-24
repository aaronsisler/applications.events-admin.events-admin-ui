import { inject } from "@angular/core";
import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";

import { Organizer } from "../models/organizer";
import { OrganizerService } from "../services/organizer-service";

interface OrganizerState {
  organizers: Organizer[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: OrganizerState = {
  organizers: [],
  hasError: false,
  isLoading: true,
};

export const OrganizerStore = signalStore(
  withState<OrganizerState>(initialState),
  withMethods((store) => {
    const organizerService = inject(OrganizerService);
    return {
      getAll: (establishmentId: string): void => {
        organizerService.getList(establishmentId).subscribe({
          next: (organizers) => {
            patchState(store, () => ({ organizers, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch organizers", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
      postAll: (establishmentId: string, organizers: Organizer[]): void => {
        organizerService.postList(establishmentId, organizers).subscribe({
          next: (newOrganizers) => {
            patchState(store, () => ({
              organizers: [...(store.organizers() || []), ...newOrganizers],
              isLoading: false,
            }));
          },
          error: (error) => {
            console.error("Failed to create organizers", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
    };
  })
);
