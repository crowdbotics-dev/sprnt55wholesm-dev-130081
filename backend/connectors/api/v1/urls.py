from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import spr55demosmViewSet

router = DefaultRouter()
router.register("spr55demosm", spr55demosmViewSet, basename="spr55demosm")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
