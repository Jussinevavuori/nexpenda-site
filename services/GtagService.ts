export type GtagEventAction =
  | "add_payment_info"
  | "add_shipping_info"
  | "add_to_cart"
  | "add_to_wishlist"
  | "begin_checkout"
  | "checkout_progress"
  | "click"
  | "earn_virtual_currency"
  | "exception"
  | "file_download"
  | "generate_lead"
  | "join_group"
  | "login"
  | "optimize_experiment_impression"
  | "optimize_personalization_impression"
  | "page_view"
  | "purchase"
  | "refund"
  | "remove_from_cart"
  | "scroll"
  | "search"
  | "select_content"
  | "select_item"
  | "select_promotion"
  | "set_checkout_option"
  | "share"
  | "sign_up"
  | "spend_virtual_currency"
  | "timing_complete"
  | "video_complete"
  | "video_play"
  | "video_progress"
  | "view_cart"
  | "view_item"
  | "view_item_list"
  | "view_promotion"
  | "view_search_results";

export type GtagEvent = {
  category: string;
  label: string;
  value: number;
};

export class GtagService {
  static GoogleAnalyticsTrackingId = "G-Y74KDL8GJ9";

  /**
   * Mark a page as viewed.
   *
   * @param url The viewed URL.
   */
  static pageview(url: URL) {
    window.gtag("config", this.GoogleAnalyticsTrackingId, {
      page_path: url,
    });
  }

  /**
   * Emit a gtag event.
   *
   * @param action The type of event to emit.
   * @param event The event to emit.
   * @param options The optional options for the event.
   */
  static event(
    action: GtagEventAction,
    event: GtagEvent,
    options: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams = {}
  ) {
    window.gtag("event", action, {
      ...options,
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
  }

  /**
   * Ready made events
   */
  static get events() {
    return {
      goto_signup() {
        GtagService.event("sign_up", {
          category: "Navigate to App",
          label: "Navigate to app signup page",
          value: 1,
        });
      },
      goto_login() {
        GtagService.event("login", {
          category: "Navigate to App",
          label: "Navigate to app login page",
          value: 1,
        });
      },
    };
  }
}
