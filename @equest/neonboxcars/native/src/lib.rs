use neon::prelude::*;
use boxcars::{ParserBuilder,NetworkParse};

// borrowed function implementation from rl-web
// https://github.com/nickbabcock/rl-web/blob/master/crate/src/lib.rs

fn parseReplayHeader(mut cx: FunctionContext) -> JsResult<JsValue> {
	// data: &[u8] 
	let data: Handle<JsArrayBuffer> = cx.argument(0)?;
	let replay = ParserBuilder::new(data)
		.with_network_parse(NetworkParse::Never)
		.on_error_check_crc()
		.parse();

	replay
		// .map_err(|e| JsValue::from_str(e.to_string().as_str()))
		.and_then(|x| {
			// extract just the properties from json
			return serde_json::to_string_pretty(&x["properties"]);
		})
}


register_module!(mut cx, {
	cx.export_function("parseReplayHeader", parseReplayHeader)
});


