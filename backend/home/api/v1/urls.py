from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import DfegViewSet, DfegViewSet, DfegViewSet, DfegViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register("dfeg", DfegViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
