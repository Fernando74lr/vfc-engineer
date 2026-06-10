/**
 * Props for the custom VFC button.
 */
export type ButtonVFCProps = {
	/** Callback invoked when the button is pressed. */
	action: () => void;
	/** Button label text. */
	title: string;
	/** Optional button tint color in hex format. */
	hexColor?: string;
};
