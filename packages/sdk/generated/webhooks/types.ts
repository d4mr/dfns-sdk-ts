export type CreateWebhookBody = {
    url: string;
    /** Webhook status */
    status?: ("Enabled" | "Disabled") | undefined;
    description?: string | undefined;
    events: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[];
};

export type CreateWebhookResponse = {
    /** Webhook ID */
    id: string;
    /** Webhook url */
    url: string;
    /** All events this webhook is subscribed to. */
    events: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[];
    /** Webhook status */
    status: "Enabled" | "Disabled";
    /** Short description this webhook's purpose */
    description?: string | undefined;
    /** Date when webhook was created */
    dateCreated: string;
    /** Date when webhook was last updated */
    dateUpdated: string;
    /** The secret associated with this webhook, with which webhook requests will be signed. */
    secret: string;
};

export type CreateWebhookRequest = { body: CreateWebhookBody }

export type DeleteWebhookParams = {
    webhookId: string;
};

export type DeleteWebhookResponse = {
    deleted: true;
};

export type DeleteWebhookRequest = DeleteWebhookParams

export type GetWebhookParams = {
    webhookId: string;
};

export type GetWebhookResponse = {
    /** Webhook ID */
    id: string;
    /** Webhook url */
    url: string;
    /** All events this webhook is subscribed to. */
    events: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[];
    /** Webhook status */
    status: "Enabled" | "Disabled";
    /** Short description this webhook's purpose */
    description?: string | undefined;
    /** Date when webhook was created */
    dateCreated: string;
    /** Date when webhook was last updated */
    dateUpdated: string;
};

export type GetWebhookRequest = GetWebhookParams

export type GetWebhookEventParams = {
    webhookId: string;
    webhookEventId: string;
};

export type GetWebhookEventResponse = {
    /** WebhookEvent ID */
    id: string;
    /** ISO date string when event was raised */
    date: string;
    /** Webhook event */
    kind: "wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected";
    data: {
        [x: string]: any;
    };
    /** Status code of the webhook request */
    status: string;
    /** Error message if any error happened during the webhook request. */
    error?: string | undefined;
    /** Unix timestamp when the event was forwarded to the webhook url by our servers. */
    timestampSent: number;
};

export type GetWebhookEventRequest = GetWebhookEventParams

export type ListWebhookEventsParams = {
    webhookId: string;
};

export type ListWebhookEventsQuery = {
    kind?: ("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | undefined;
    deliveryFailed?: ("true" | "false") | undefined;
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListWebhookEventsResponse = {
    items: {
        /** WebhookEvent ID */
        id: string;
        /** ISO date string when event was raised */
        date: string;
        /** Webhook event */
        kind: "wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected";
        data: {
            [x: string]: any;
        };
        /** Status code of the webhook request */
        status: string;
        /** Error message if any error happened during the webhook request. */
        error?: string | undefined;
        /** Unix timestamp when the event was forwarded to the webhook url by our servers. */
        timestampSent: number;
    }[];
    nextPageToken?: string | undefined;
};

export type ListWebhookEventsRequest = ListWebhookEventsParams & { query?: ListWebhookEventsQuery }

export type ListWebhooksQuery = {
    limit?: number | undefined;
    paginationToken?: string | undefined;
};

export type ListWebhooksResponse = {
    items: {
        /** Webhook ID */
        id: string;
        /** Webhook url */
        url: string;
        /** All events this webhook is subscribed to. */
        events: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[];
        /** Webhook status */
        status: "Enabled" | "Disabled";
        /** Short description this webhook's purpose */
        description?: string | undefined;
        /** Date when webhook was created */
        dateCreated: string;
        /** Date when webhook was last updated */
        dateUpdated: string;
    }[];
    nextPageToken?: string | undefined;
};

export type ListWebhooksRequest = { query?: ListWebhooksQuery }

export type PingWebhookParams = {
    webhookId: string;
};

export type PingWebhookResponse = {
    status: string;
    error?: string | undefined;
};

export type PingWebhookRequest = PingWebhookParams

export type UpdateWebhookBody = {
    url?: string | undefined;
    description?: (string | undefined) | undefined;
    events?: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[] | undefined;
    /** Webhook status */
    status?: (("Enabled" | "Disabled") | undefined) | undefined;
};

export type UpdateWebhookParams = {
    webhookId: string;
};

export type UpdateWebhookResponse = {
    /** Webhook ID */
    id: string;
    /** Webhook url */
    url: string;
    /** All events this webhook is subscribed to. */
    events: (("wallet.created" | "wallet.exported" | "wallet.delegated" | "wallet.signature.requested" | "wallet.signature.failed" | "wallet.signature.rejected" | "wallet.signature.signed" | "wallet.transaction.requested" | "wallet.transaction.failed" | "wallet.transaction.rejected" | "wallet.transaction.broadcasted" | "wallet.transaction.confirmed" | "wallet.transfer.requested" | "wallet.transfer.failed" | "wallet.transfer.rejected" | "wallet.transfer.broadcasted" | "wallet.transfer.confirmed" | "wallet.blockchainevent.detected") | "*")[];
    /** Webhook status */
    status: "Enabled" | "Disabled";
    /** Short description this webhook's purpose */
    description?: string | undefined;
    /** Date when webhook was created */
    dateCreated: string;
    /** Date when webhook was last updated */
    dateUpdated: string;
};

export type UpdateWebhookRequest = UpdateWebhookParams & { body: UpdateWebhookBody }

