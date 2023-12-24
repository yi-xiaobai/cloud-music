import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import BScroll from "better-scroll";
import PropTypes from "prop-types";

import styled from "styled-components";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

/**
 * @param{} props 父组件传过来的数据
 * @param{} ref 父组件传过来的
 */
const Scroll = forwardRef((props, ref) => {
  // better-scroll 实例对象
  const [bScroll, setBScroll] = useState("");
  const scrollContaninerRef = useRef();

  const {
    direction,
    click,
    refresh,
    pullDownLoading,
    pullUpLoading,
    bounceTop,
    bounceBottom,
  } = props;

  const { onScroll, pullDown, pullUp } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContaninerRef.current, {
      scrollX: direction === "horizental", // 当设置为true时 可以开启横向滚动
      scrollY: direction === "vertical", // 当设置为true时 可以开启纵向滚动
      propTypes: 3,
      click: click, // 当设置为true时 bettre-scroll会派发一个click事件
      bounce: {
        // 当滚动超过边缘的时候会有一小段回弹动画 true：开启动画
        top: true,
        bottom: true,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
  }, []);

  // 每次重新渲染都要刷新 防止页面卡斯
  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  // 给实例绑定scroll事件
  useEffect(() => {
    if (!bScroll || !onScroll) {
      return;
    }
    bScroll.on("scroll", (scroll) => {
      onScroll(scroll);
    });

    return () => {
      bScroll.off("scroll");
    };
  }, [bScroll, onScroll]);

  // 上拉到底的判断 调用上拉刷新的函数
  useEffect(() => {
    if (!bScroll || !pullUp) {
      return;
    }

    bScroll.on("scrollEnd", () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });

    return () => {
      bScroll.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  // 下拉刷新的判断
  useEffect(() => {
    if (!bScroll || !pullDown) {
      return;
    }

    bScroll.on("touchEnd", (pos) => {
      console.log("==>Get pos", pos);
      if (pos.y > 50) {
        pullDown();
      }
    });

    return () => {
      bScroll.off("touchEnd");
    };
  });

  useImperativeHandle(ref, () => ({
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    // 给外部提供bs 实例
    getBScroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  return (
    <ScrollContainer ref={scrollContaninerRef}>
      {props.children}
    </ScrollContainer>
  );
});

Scroll.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizental"]),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,
  bounceBottom: PropTypes.bool,
};

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true, // 是否刷新
  onScroll: null, // 滑动触发的回调函数
  pullUpLoading: false, // 是否显示上拉 loading 动画
  pullDownLoading: false, // 是否显示下拉 loading 动画
  pullUp: null, // 上拉加载逻辑
  pullDown: null, // 下拉刷新逻辑
  bounceTop: true, // 是否支持向上吸顶
  bounceBottom: true, // 是否支持向下吸底
};

export default Scroll;
