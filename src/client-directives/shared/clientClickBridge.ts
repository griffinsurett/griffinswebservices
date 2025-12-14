export const CLIENT_CLICK_HANDLER_STORE_KEY = '__GWS_CLIENT_CLICK_HANDLERS__';
export const CLIENT_CLICK_HANDLER_READY_EVENT = 'gws:client-click-handler-ready';

export type ClientClickHandlerContext = {
  event: Event;
  target: EventTarget | null;
  replay: () => void;
};

export type ClientClickHandler = (context: ClientClickHandlerContext) => void | boolean;
