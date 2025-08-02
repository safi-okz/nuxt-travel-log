ALTER TABLE `location` ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE `locatioLog` ADD `user_id` integer NOT NULL REFERENCES user(id);