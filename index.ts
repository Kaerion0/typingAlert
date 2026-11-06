/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { showNotification } from "@api/Notifications";
import { definePluginSettings } from "@api/Settings";
import { Devs } from "@utils/constants";
import definePlugin, { OptionType } from "@utils/types";
import { ChannelType } from "@vencord/discord-types/enums";
import { ChannelStore, NavigationRouter, RelationshipStore, SelectedChannelStore, UserStore } from "@webpack/common";

const settings = definePluginSettings({
    cooldown: {
        description: "Notification cooldown per DM (seconds)",
        type: OptionType.SLIDER,
        markers: [10, 30, 60, 120, 300],
        default: 60,
        stickToMarkers: true,
    }
});

const lastNotified = new Map<string, number>();

export default definePlugin({
    name: "TypingAlert",
    description: "Shows a notification when someone is typing to you in DMs",
    authors: [Devs.Kaerion],
    tags: ["Utility"],
    settings,

    flux: {
        TYPING_START({ channelId, userId }: { channelId: string; userId: string; }) {
            const channel = ChannelStore.getChannel(channelId);

            if (!channel) return;
            if (channel.type !== ChannelType.DM) return;

            if (SelectedChannelStore.getChannelId() === channelId && document.hasFocus()) return;
            if (UserStore.getCurrentUser().id === userId) return;
            if (RelationshipStore.isBlocked(userId)) return;

            const now = Date.now();
            const last = lastNotified.get(channelId) ?? 0;

            if (now - last < settings.store.cooldown * 1000) return;

            lastNotified.set(channelId, now);

            const user = UserStore.getUser(userId);

            showNotification({
                title: user.globalName || user.username,
                body: "Is typing to you...",
                icon: user.getAvatarURL(undefined, 128),
                onClick: () => NavigationRouter.transitionTo(`/channels/@me/${channelId}`),
                noPersist: true
            });
        },
    },
});
