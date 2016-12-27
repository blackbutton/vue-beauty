webpackJsonp([47,53],{

/***/ 3:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".markdown > table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  empty-cells: show;\n  border: 1px solid #e9e9e9;\n  width: 100%;\n  margin-bottom: 24px;\n}\n.markdown > table th {\n  white-space: nowrap;\n  color: #5c6b77;\n  font-weight: 600;\n  background: #f7f7f7;\n}\n.markdown > table td,\n.markdown > table th {\n  border: 1px solid #e9e9e9;\n  padding: 8px 16px;\n  text-align: left;\n}\n.markdown.api-container table {\n  font-family: Consolas,Menlo,Courier,monospace;\n  font-size: 13px;\n}\n", ""]);

	// exports


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./apiTable.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = "\n<section class=\"markdown api-container\">\n  <h2>{{ title }}</h2>\n  <slot></slot>\n  <table>\n    <thead>\n      <tr>\n        <th v-for=\"text in head\" v-html=\"text\"></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr v-for=\"item in content\">\n        <td v-for=\"text in item\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n      <tr v-for=\"api in apis\">\n        <td v-for=\"text in api\" v-html=\"text\" track-by=\"$index\"></td>\n      </tr>\n    </tbody>\n  </table>\n</section>\n";

/***/ },

/***/ 6:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  props: {
	    type: {
	      type: String,
	      default: 'props'
	    },
	    head: Array,
	    content: Array,
	    apis: Array,
	    title: {
	      type: String,
	      default: "API"
	    }
	  },
	  ready: function ready() {
	    if (!this.head) {
	      switch (this.type) {
	        case 'props':
	          this.$set('head', ['参数', '说明', '类型', '默认值']);break;
	        case 'events':
	          this.$set('head', ['事件名', '说明', '参数']);break;
	        case 'methods':
	          this.$set('head', ['方法名', '说明', '参数', '返回值']);break;
	      }
	    }
	  }
	};

/***/ },

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/apiTable.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(5)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(1)();
	// imports


	// module
	exports.push([module.id, ".code-box {\n  border: 1px solid #e9e9e9;\n  border-radius: 6px;\n  display: inline-block;\n  width: 100%;\n  position: relative;\n  margin: 0 0 16px;\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n}\n.code-box .collapse {\n  position: absolute;\n  right: 16px;\n  bottom: 16px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px;\n  opacity: .5;\n  text-align: center;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  -webkit-transition: all .3s ease;\n  transition: all .3s ease;\n  color: #999;\n  background: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 100%;\n}\n.code-box .collapse:hover {\n  opacity: 1;\n}\n.code-box:hover {\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 10;\n  background: #fff;\n}\n.code-box:hover .code-box-title {\n  background: #fbfbfb;\n  box-shadow: 0 -1.2px 0 #e9e9e9;\n}\n.code-box:hover .code-box-meta {\n  background: #fbfbfb;\n}\n.code-box .code-box-demo {\n  border-bottom: 1px solid #e9e9e9;\n  padding: 42px 20px 50px;\n}\n.code-box .highlight-wrapper {\n  max-height: 0;\n  opacity: 0;\n  overflow: auto;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n  border-radius: 0 0 6px 6px;\n}\n.code-box .highlight-wrapper-expand {\n  max-height: 500px;\n  opacity: 1;\n}\n.code-box.expand .collapse {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.code-box.expand .code-box-meta {\n  border-radius: 0;\n  border-bottom: 1px dashed #e9e9e9;\n}\n.code-box-meta {\n  position: relative;\n  padding: 16px;\n  border-radius: 0 0 6px 6px;\n  -webkit-transition: background-color 0.4s ease;\n  transition: background-color 0.4s ease;\n  width: 100%;\n  font-size: 12px;\n}\n.code-box-meta p {\n  margin: 0;\n}\n.code-box-title {\n  position: absolute;\n  top: -14px;\n  padding: 1px 1.1em;\n  color: #777;\n  border-radius: 6px;\n  background: #fff;\n  -webkit-transition: all .4s ease;\n  transition: all .4s ease;\n}\n.code-box-title:before {\n  font-family: anticon;\n  content: \"\\E6D2\";\n  font-size: 16px;\n  vertical-align: middle;\n  line-height: 22px;\n  position: relative;\n  margin-right: 8px;\n  top: -2px;\n  color: #ccc;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  display: inline-block;\n}\n.code-box .code-box-title a,\n.code-box .code-box-title a:hover {\n  color: #666;\n  font-size: 14px;\n}\n.code-box .hljs {\n  background: none;\n}\n", ""]);

	// exports


/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(2)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue", function() {
				var newContent = require("!!./../../node_modules/.0.26.1@css-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/style-rewriter.js!./../../node_modules/.2.2.3@less-loader/index.js!./../../node_modules/.8.5.4@vue-loader/lib/selector.js?type=style&index=0!./codeBox.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = "\n\n<section class=\"code-box\" :class=\"{'expand': open}\">\n  <section class=\"code-box-demo\">\n    <slot></slot>\n  </section>\n  <section class=\"code-box-meta markdown\">\n    <div class=\"code-box-title\"><a>{{ title }}</a></div>\n    <div><p>{{{ describe }}}</p></div>\n    <span class=\"collapse anticon anticon-circle-o-right\" @click=\"handleOpen\"></span>\n  </section>\n  <section class=\"highlight-wrapper\" :class=\"{'highlight-wrapper-expand': open}\">\n    <div class=\"highlight\">\n      <pre>\n        <code class=\"html\"><slot name=\"preCode\"></slot>{{ code }}<slot name=\"postCode\"></slot></code>\n      </pre>\n    </div>\n  </section>\n</section>\n\n";

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _highlight = __webpack_require__(13);

	var _highlight2 = _interopRequireDefault(_highlight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: {
	    title: String,
	    describe: String,
	    code: String
	  },
	  data: function data() {
	    return {
	      open: false
	    };
	  },
	  ready: function ready() {
	    var _this = this;

	    var children = this._slotContents.default.childNodes;

	    children = Array.prototype.filter.call(children, function (node) {
	      return node.nodeType === 1;
	    });

	    if (!this.code) {
	      this.code = children.map(function (dom) {
	        return dom.outerHTML.replace(/\t| {4}/g, '');
	      }).join('\n');
	    }

	    this.$nextTick(function () {
	      _highlight2.default.highlightBlock(_this.$el.querySelector('pre code'));
	    });
	  },

	  methods: {
	    handleOpen: function handleOpen() {
	      this.open = !this.open;
	    }
	  }
	};

/***/ },

/***/ 12:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/codeBox.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(10)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ },

/***/ 185:
/***/ function(module, exports) {

	module.exports = "\n\n  <div>\n\n    <section class=\"markdown\">\n      <h1>Alert 警告提示</h1>\n      <p>\n        警告提示，展现需要关注的信息。\n      </p>\n      <h2>何时使用</h2>\n      <ul>\n        <li>当某个页面需要向用户显示警告的信息时。</li>\n        <li>非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。</li>\n      </ul>\n      <h2>组件演示</h2>\n    </section>\n\n    <v-Row :gutter=\"16\">\n      <v-Col span=\"12\">\n\n        <code-box\n          title=\"基础\"\n          describe=\"最简单的用法，适用于简短的警告提示。\"\n        >\n          <v-alert type=\"success\" message=\"成功提示的文案\"></v-alert>\n        </code-box>\n\n        <code-box\n          title=\"可关闭的警告提示\"\n          describe=\"显示关闭按钮，点击可关闭警告提示。\"\n          code='<v-alert type=\"warning\" message=\"警告提示的文案\"></v-alert>\n<v-alert type=\"error\" message=\"错误提示的文案\"\ndescription=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\nclosable></v-alert>'\n        >\n          <v-alert type=\"warning\" message=\"警告提示的文案\"></v-alert>\n          <v-alert\n            type=\"error\"\n            message=\"错误提示的文案\"\n            description=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\n            closable></v-alert>\n        </code-box>\n\n        <code-box\n          title=\"图标\"\n          describe=\"可口的图标让信息类型更加醒目。\"\n          code='<v-alert type=\"success\" message=\"成功提示的文案\" show-icon></v-alert>\n<v-alert type=\"info\" message=\"消息提示的文案\" show-icon></v-alert>\n<v-alert type=\"warning\" message=\"警告提示的文案\" show-icon></v-alert>\n<v-alert type=\"error\" message=\"错误提示的文案\" show-icon></v-alert>\n<v-alert type=\"success\" message=\"成功提示的文案\" show-icon\n  description=\"成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍\"\n></v-alert>\n<v-alert type=\"info\" message=\"消息提示的文案\" show-icon\n  description=\"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍\"\n></v-alert>\n<v-alert\n  type=\"warning\" message=\"警告提示的文案\" show-icon\n  description=\"警告提示的辅助性文字介绍警告提示的辅助性文字介绍\"\n></v-alert>\n<v-alert\n  type=\"error\" message=\"错误提示的文案\" show-icon\n  description=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\n></v-alert>'\n        >\n          <v-alert type=\"success\" message=\"成功提示的文案\" show-icon></v-alert>\n          <v-alert type=\"info\" message=\"消息提示的文案\" show-icon></v-alert>\n          <v-alert type=\"warning\" message=\"警告提示的文案\" show-icon></v-alert>\n          <v-alert type=\"error\" message=\"错误提示的文案\" show-icon></v-alert>\n          <v-alert type=\"success\" message=\"成功提示的文案\" show-icon\n            description=\"成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert type=\"info\" message=\"消息提示的文案\" show-icon\n            description=\"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert\n            type=\"warning\" message=\"警告提示的文案\" show-icon\n            description=\"警告提示的辅助性文字介绍警告提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert\n            type=\"error\" message=\"错误提示的文案\" show-icon\n            description=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\n          ></v-alert>\n        </code-box>\n\n      </v-Col>\n      <v-Col span=\"12\">\n        <code-box\n          title=\"四种样式\"\n          describe=\"共有四种样式 success、info、warning、error。\"\n          code='<v-alert type=\"success\" message=\"成功提示的文案\"></v-alert>\n<v-alert type=\"info\" message=\"消息提示的文案\"></v-alert>\n<v-alert type=\"warning\" message=\"警告提示的文案\"></v-alert>\n<v-alert type=\"error\" message=\"错误提示的文案\"></v-alert>'\n        >\n          <v-alert type=\"success\" message=\"成功提示的文案\"></v-alert>\n          <v-alert type=\"info\" message=\"消息提示的文案\"></v-alert>\n          <v-alert type=\"warning\" message=\"警告提示的文案\"></v-alert>\n          <v-alert type=\"error\" message=\"错误提示的文案\"></v-alert>\n        </code-box>\n\n        <code-box\n          title=\"含有辅助性文字介绍\"\n          describe=\"含有辅助性文字介绍的警告提示。\"\n          code='<v-alert type=\"success\" message=\"成功提示的文案\"\n  description=\"成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍\"\n></v-alert>\n<v-alert type=\"info\" message=\"消息提示的文案\"\n  description=\"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍\"\n></v-alert>\n<v-alert\n  type=\"warning\" message=\"警告提示的文案\"\n  description=\"警告提示的辅助性文字介绍警告提示的辅助性文字介绍\"\n></v-alert>\n<v-alert\n  type=\"error\" message=\"错误提示的文案\"\n  description=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\n></v-alert>'\n        >\n          <v-alert type=\"success\" message=\"成功提示的文案\"\n            description=\"成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍成功提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert type=\"info\" message=\"消息提示的文案\"\n            description=\"消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert\n            type=\"warning\" message=\"警告提示的文案\"\n            description=\"警告提示的辅助性文字介绍警告提示的辅助性文字介绍\"\n          ></v-alert>\n          <v-alert\n            type=\"error\" message=\"错误提示的文案\"\n            description=\"错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍错误提示的辅助性文字介绍\"\n          ></v-alert>\n        </code-box>\n\n        <code-box\n          title=\"自定义关闭\"\n          describe=\"可以自定义关闭，自定义的文字会替换原先的关闭 Icon。\"\n          code='<v-alert type=\"info\" message=\"消息提示的文案\" close-text=\"不再提醒\"  closable :on-close=\"onClose\" ></v-alert>'\n        >\n          <v-alert type=\"info\" message=\"消息提示的文案\" close-text=\"不再提醒\"  closable\n            :on-close=\"onClose\"\n          ></v-alert>\n        </code-box>\n\n        </v-Col>\n      </v-Row>\n\n    <api-table\n      :apis='apis'\n    ></api-table>\n\n  </div>\n\n";

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _codeBox = __webpack_require__(12);

	var _codeBox2 = _interopRequireDefault(_codeBox);

	var _apiTable = __webpack_require__(7);

	var _apiTable2 = _interopRequireDefault(_apiTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      onClose: function onClose() {
	        console.log(this);
	      },
	      apis: [{
	        parameter: 'type',
	        explain: '必选参数，指定警告提示的样式，有四种选择 success、info、warning、error',
	        type: 'String',
	        default: 'info'
	      }, {
	        parameter: 'closable',
	        explain: '可选参数，默认不显示关闭按钮',
	        type: 'Boolean',
	        default: 'false'
	      }, {
	        parameter: 'closeText',
	        explain: '可选参数，自定义关闭按钮',
	        type: 'String',
	        default: '无'
	      }, {
	        parameter: 'message',
	        explain: '必选参数，警告提示内容',
	        type: 'String',
	        default: '无'
	      }, {
	        parameter: 'description',
	        explain: '可选参数，警告提示的辅助性文字介绍',
	        type: 'String',
	        default: '无'
	      }, {
	        parameter: 'onClose',
	        explain: '可选参数，关闭时触发的回调函数',
	        type: 'Function',
	        default: '无'
	      }, {
	        parameter: 'showIcon',
	        explain: '可选参数，是否显示辅助图标',
	        type: 'Boolean',
	        default: 'false'
	      }]
	    };
	  },
	  components: {
	    codeBox: _codeBox2.default,
	    apiTable: _apiTable2.default
	  }
	};

/***/ },

/***/ 637:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	var __vue_styles__ = {}
	__vue_script__ = __webpack_require__(511)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/views/alert.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(185)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	var __vue_options__ = typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports
	if (__vue_template__) {
	__vue_options__.template = __vue_template__
	}
	if (!__vue_options__.computed) __vue_options__.computed = {}
	Object.keys(__vue_styles__).forEach(function (key) {
	var module = __vue_styles__[key]
	__vue_options__.computed[key] = function () { return module }
	})


/***/ }

});