export type IconName<T extends string> = T extends `assets/icons/${infer U}.svg` ? U : never;
