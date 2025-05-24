import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { Establishment } from "../models/establishment";
import { inject } from "@angular/core";
import { EstablishmentService } from "../services/establishment-service";

interface EstablishmentState {
  establishments: Establishment[];
  hasError: boolean;
  isLoading: boolean;
}

const initialState: EstablishmentState = {
  establishments: [],
  hasError: false,
  isLoading: true,
};

export const EstablishmentStore = signalStore(
  withState<EstablishmentState>(initialState),
  withMethods((store) => {
    const establishmentService = inject(EstablishmentService);
    return {
      getAll: (): void => {
        establishmentService.getList().subscribe({
          next: (establishments) => {
            patchState(store, () => ({ establishments, isLoading: false }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ hasError: true, isLoading: false }));
          },
        });
      },
      postAll: (establishments: Establishment[]): void => {
        establishmentService.postList(establishments).subscribe({
          next: (newEstablishments) => {
            patchState(store, () => ({
              establishments: [...store.establishments(), ...newEstablishments],
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
