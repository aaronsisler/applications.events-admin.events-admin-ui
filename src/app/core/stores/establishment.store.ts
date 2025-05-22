import { signalStore, withState, withMethods, patchState } from "@ngrx/signals";
import { Establishment } from "../../pages/establishment/establishment";
import { inject } from "@angular/core";
import { EstablishmentService } from "../services/establishment-service";

interface EstablishmentState {
  establishments: Establishment[];
  error: boolean;
}

const initialState: EstablishmentState = {
  establishments: [],
  error: false,
};

export const EstablishmentStore = signalStore(
  withState<EstablishmentState>(initialState),
  withMethods((store) => {
    const establishmentService = inject(EstablishmentService);
    return {
      getAll: (): void => {
        establishmentService.getList().subscribe({
          next: (establishments) => {
            patchState(store, () => ({ establishments }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ error: true }));
          },
        });
      },
      postAll: (establishments: Establishment[]): void => {
        establishmentService.postList(establishments).subscribe({
          next: (newEstablishments) => {
            patchState(store, () => ({
              establishments: [...store.establishments(), ...newEstablishments],
            }));
          },
          error: (error) => {
            console.error("Failed to fetch establishments", error);
            patchState(store, () => ({ error: true }));
          },
        });
      },
    };
  })
);
